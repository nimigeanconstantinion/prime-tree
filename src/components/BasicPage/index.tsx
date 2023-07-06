import React, {MouseEventHandler, SyntheticEvent, useEffect, useRef, useState} from "react";

import NodN from "../model/NodN";


import {
    Tree,
    TreeEventNodeEvent,
    TreeExpandedKeysType,
    TreeFilterInputOptions,
    TreeFilterValueChangeEvent, TreeProps
} from 'primereact/tree';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';// icons

import { ContextMenu } from 'primereact/contextmenu';
import {MenuItem, MenuItemCommandEvent} from 'primereact/menuitem';


import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit,faPlus,faMinus} from "@fortawesome/free-solid-svg-icons";

import Api from "../../Api";
import {ProdusDisponibil} from "../model/ListaCafenele";
import {WrapperBasic} from "./BasicPageStyle";
import Child from "../AddSource/index2";
import {InputText} from "primereact/inputtext";
import CardProdus from "../CardProdus";
import {TreeN} from "../model/TreeN";
import INode from "../model/INode";
import BKNode from "../model/BKNode";

interface PrimeNode{
    key: string,
    label: string,
    data:BKNode|null,
    icon: string,
    children: PrimeNode[]

}

function Index(){
    const [nodes, setNodes] = useState<PrimeNode[]>([
        {
            key: '0',
            label: 'Structure',
            data: null,
            icon: 'pi pi-fw pi-check',
            children:[],


        },
    ]);
    const [parinte,setParinte]=useState<BKNode|null>(null);
    const [nod,setNod]=useState(null);
    const [addn,setAddn]=useState(0);
    const [superior,setSuperior]=useState<string|null>(null);

    const [expandedKeys, setExpandedKeys] = useState<TreeExpandedKeysType>({'0-0': true,'1-':false,'2-':false});
    const [selectedKey, setSelectedKey] = useState<string>('');
    const [produse,setProduse]=useState<ProdusDisponibil[]>([]);

    const cm = useRef<ContextMenu>(null);
    const [ch,setCh]=useState(0);

    const [menuVisible, setMenuVisible] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ left: 0, top: 0 });



    const showContextMenu = (event:any) => {

        event.preventDefault();
        setMenuPosition({ left: event.clientX, top: event.clientY });
        setMenuVisible(true);


    };

    const hideContextMenu = () => {
        setMenuVisible(false);
    };

    const handleMenuItemClick = (event:MenuItemCommandEvent, item:string) => {
        console.log('Clicked menu item:', item);
        console.log(parinte);


        hideContextMenu();
        switch (item){
            case "Edit":

                if(parinte!=null){
                    let sup=findIDParent(0,nodes[0],parinte!.label);
                    setSuperior(sup);
                    setCh(prevState => prevState+1);
                    setAddn(0);
                }else{
                    let sup="";

                    console.log("Nu puteti edita Nodul")
                }

                break;

            case "Delete":
                deleteNode();
                break;

            case "Add":
                console.log("Sunt in ADD");
                if(parinte!=null){

                    let sup=findIDParent(0,nodes[0],parinte!.label);
                    setSuperior(sup);
                    setAddn(1);

                    setCh(prevState => prevState=prevState+1);
                }else{
                    let sup="null";
                    setSuperior(sup);
                    setAddn(1);

                    setCh(prevState => prevState=prevState+1);
                }
                addNode();

                break;
        }
    };

    const menuItems:MenuItem[] = [
        {
            label: 'Edit',
            icon: <FontAwesomeIcon className={"icomen"} icon={faEdit}/>,
            command: (event) => handleMenuItemClick(event, 'Edit')
        },
        {
            label: 'Delete',
            icon: <FontAwesomeIcon className={"icomen"} icon={faMinus}/>,
            command: (event) => handleMenuItemClick(event, 'Delete')
        },
        {
            label: 'Add Child',
            icon: <FontAwesomeIcon className={"icomen"} icon={faPlus}/>,
            command: (event) => handleMenuItemClick(event, 'Add')
        }
    ];



    useEffect(() => {
        loadTreeFromBKEnd();
    }, []);

useEffect(()=>{
    console.log("Changed ch");
},[ch]);


    let findNode=(root:PrimeNode,labelId:string):PrimeNode|null=>{
        if(root!=null){
            if(root.label==labelId){
                return root;
            }else{
                if(root.children.length>0){
                   return root.children.map(c=>{
                        return findNode(c,labelId);
                    }).filter(r=>r!=null)[0];
                }else{
                    return null;
                }
            }
        }
        return  null
    }

    let findIDParent=(pas:number,prev:PrimeNode,idChild:string):string|null=>{
        console.log("Root "+pas);
        console.log(prev);

        if(prev!=null){
            if(prev.children.filter(c=>c.label==idChild).length>0){
                if(prev.data!=null){
                    return prev.data.id;
                }else{
                    return null;
                }
            }else{
                let results:(string|null)[]=[];
                pas++;
                prev.children.forEach(c=>{
                    let sup=findIDParent(pas,c,idChild);
                    results.push(sup);
                });
                if(results.filter(c=>c!=null).length>0){
                    return results.filter(c=>c!=null)[0];
                }
                return null;

            }
        }
        return  null
    }


    let loadTreeFromBKEnd=async ()=>{
        let api=new Api();
        let newT:Object[]=[];
        let tmp:BKNode[]=[];
        let primeNodes:PrimeNode[]=[];

        newT=await api.getTree();
        primeNodes.push({key:"0",label:"Structura",data:null,icon:"pi pi-fw",children:[]});

        newT.map((e,index)=>{
            if(typeof e!="string"){
                    let tmpBk=e as BKNode;
                    tmp.push(tmpBk);
                    primeNodes[0].children.push({key:"0-"+index,label:tmpBk.label,data:tmpBk,icon:"pi pi-fw pi-check",children:[]});
                }
            })



        while(tmp.length>0){
            let chld=tmp[0].subordinates;
            chld.map((c,index)=>{
                if(typeof c!="string"){
                    let tn=c as BKNode;
                    let sup=findNode(primeNodes[0],tmp[0].label);
                    let pn:PrimeNode={key:sup?.key+"-"+index,label:c.label,data:c,icon:"pi pi-fw pi-check",children:[]}
                    sup?.children.push(pn);
                    tmp.push(c);
                }
            })

            tmp.shift();
        }


        setNodes(primeNodes);

    }

    let deleteNode=async ()=>{
        let api= new Api();
        try{
            if(parinte?.id!=null){
                let reponse=await api.deleteNode(parinte!.id);
                console.log(reponse);

            }
            await loadTreeFromBKEnd();
        }catch (e) {
            console.log("Eroare de sterge NOD");
        }

    }


    let addNode=()=>{
        console.log("In add NODE");
        setCh(prevState => prevState+1);
        setAddn(1);
    }
    let selNode=(e:TreeEventNodeEvent)=>{
        console.log("am selectat:=====")
        console.log(e.node.data);
        let data=e.node.data;
        // console.log(nodes[0]);
        let p=null;
        if(data!=null){
             p=findIDParent(0,nodes[0],e.node.data.label);

        }
        if(p!=null){
            setSuperior(p);

        }else{
            setSuperior("null");
        }
        setParinte(e.node.data);

    }

    let clkctx=()=>{

    }

    let back=()=>{
            setCh(0);
            setAddn(0);
            loadTreeFromBKEnd();
    }


    return(
        <>
            <WrapperBasic>
                <ContextMenu model={menuItems} ref={cm} onHide={hideContextMenu} style={menuPosition} />

                <div className={"div_l"} onContextMenu={(e) =>  cm.current!.show(e)}>

                    <Tree value={nodes} filter expandedKeys={expandedKeys} selectionMode="single" selectionKeys={selectedKey} onSelect={(e)=>{selNode(e);}}  onExpand={()=>{
                        setProduse([]);}} onCollapse={()=>setProduse([])} className="w-full md:w-30rem" filterPlaceholder={"Ce cautati?"}  onContextMenu={(e)=>{
                        setParinte(e.node.data);
                    }}/>


                </div>

                <div className={"div_r"}>
                    {/*(parinte!==null||superior=="null")*/}
                    {
                        ch>0?(

                                <>
                                   <Child parent={parinte as BKNode} superParent={superior} back={back} child={0} changed={ch} kind={addn}/>
                                </>
                            ):""
                    }

                </div>


            </WrapperBasic>


        </>
    )
}

export default Index;