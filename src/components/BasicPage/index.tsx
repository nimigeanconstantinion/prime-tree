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
import Child from "../AddSource";
import {InputText} from "primereact/inputtext";
import CardProdus from "../CardProdus";

function Index(){
    const [nodes, setNodes] = useState<NodN[]>([
        {
            key: '0',
            label: 'Structure',
            data: null,
            icon: 'pi pi-fw pi-check',
            children:[]

        },
    ]);
    const [parinte,setParinte]=useState(null);
    const [nod,setNod]=useState(null);

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
                setCh(prevState => prevState+1);

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
        //createTree(filterV);
        loadTreeFromBKEnd();
    }, []);


    let loadTreeFromBKEnd=async ()=>{
        let api=new Api();
        let newT:Object[]=[];
        newT=await api.getTree();
        setNodes(newT as NodN[]);

    }


    let selNode=(e:TreeEventNodeEvent)=>{
         setParinte(e.node.data);

    }

    let clkctx=()=>{

    }

    let back=()=>{

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

                    {
                        ch>0&&parinte!==null?(
                                <>
                                    {/*<p>{parinte[`${Object.keys(parinte)[1]}`]}</p>*/}

                                    <Child parent={parinte} back={back} child={0} changed={ch}/>
                                </>

                            ):""




                    }

                </div>


            </WrapperBasic>


        </>
    )
}

export default Index;