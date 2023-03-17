import {cloneElement, useEffect, useState} from "react";

import {CafeneaSauLocalitate} from "../model/CafeneaSauLocalitate";
import Nod from "../model/Nod";
import {ListaCafenele, ProdusDisponibil, PseudoApiService} from "../model/ListaCafenele";
import {
    Tree,
    TreeEventNodeEvent,
    TreeExpandedKeysType,
    TreeFilterInputOptions,
    TreeFilterValueChangeEvent, TreeProps
} from 'primereact/tree';
import TreeNode from "primereact/treenode";
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';
import NodN from "../model/NodN";
import {WrapperHome} from "./HomeStyle";
import CardProdus from "../CardProdus";
import {FilterService} from "primereact/api";
import filter = FilterService.filter;
import {TreeN} from "../model/TreeN";
import INode from "../model/INode";

interface TreePr extends TreeProps{

}

function Index() {
    const [nodes, setNodes] = useState<NodN[]>([
        {
            key: '0',
            label: 'Judete',
            data: null,
            icon: 'pi pi-fw pi-check',
            children:[]

        },
    ]);
    const [selectedKey, setSelectedKey] = useState<string>('');
    const [expandedKeys, setExpandedKeys] = useState<TreeExpandedKeysType>({'0-0': true,'1-':false,'2-':false});
    const [produse,setProduse]=useState<ProdusDisponibil[]>([]);
    const [filterV,setFilterv]=useState("");
    const [listaf,setLista]=useState<String[]>([]);


    useEffect(() => {
        // NodeService.getTreeNodes().then((data) => setNodes(data));
        getJudete();
        getLocalitati();
        getCafenele();
        getAllProduse();

    }, []);

    useEffect(()=>{
        console.log(nodes);
        if(nodes[0].children!=undefined){
            nodes[0].children.map(n=>{
                if(n.data?.denumire.toLowerCase().includes("eleorm")){
                    return n.expanded=true;
                }
            })
        }

    },[nodes])

    useEffect(()=>{
        if(nodes[0].children!=undefined){
            let response =Promise.resolve(hasCoffie(filterV,nodes[0].children[0]))
                 .then((data)=>{return data})
                 .then((data)=>{console.log("HEEEIIIIII "+data); return data});
             if(response !instanceof Error){
                 console.log("Am OBTINUT "+response);
             }
        }
       //let x=hasConpm --proxy ffie("konzlkdk",nodes[0].children[0]);
       // let v=Promise.resolve(hasCoffie(filterV,nodes[0])).then((succes)=>{return JSON.stringify(succes);});
       //  const promise = new Promise((resolve, reject) => {
       //      resolve(x);
       //  });
       //
       //  let j=null;
       //  x.then((result)=>{ console.log("eeee"+result)});

    },[filterV])

    useEffect(()=>{
        console.log(listaf);
    },[listaf])

    let getJudete = (): void => {
        let listas:NodN[]=nodes;
        let lista = ListaCafenele.cafenele
            .filter(c => c.idParinte == null)
            .map((node,index) => {
                let n: NodN = {
                    key:'1-'+node.id.toString(),
                    data: node,
                    label: node.denumire,
                    icon: "pi pi-fw pi-file",
                    children: []

                }
                return n;
            });


        //  console.log(lista);
        nodes[0].children=lista;
        let n:NodN[]=[];
        n.push({data:null,id:'0',label:'Judete',children:[]});
        n[0].children=lista;
        setNodes(n);
    }

    let getLocalitati = () => {
        console.log("Localitati="+ListaCafenele.cafenele.filter(l => l.fel ==="L"&&l.idParinte!=null).length);
        ListaCafenele.cafenele.filter(l => l.fel ==="L"&&l.idParinte!=null).map((node,index) => {
            let n: NodN = {
                key:'2-'+node.id.toString(),
                label:node.denumire,
                data: node,

                children: []
            }
            return n;
        }).forEach((data,index) => {

            if (data.data != null) {
                let parent = findParent(nodes[0], data!.data);
                let s=parent?.id+"-"+index.toString();
                let ico=parent?.icon+" "
                console.log("--");
                console.log(nodes[0]);
                console.log(data.data);
                console.log(parent);
                data.id=s;
                data.icon="pi pi-fw pi-home";
                if (parent) {
                    parent.children?.push(data);

                }
            }


        })
    }


    let getCafenele = () => {
        ListaCafenele.cafenele.filter(l => l.fel ==="C"&&l.idParinte!=null).map((node,index) => {
            let n: NodN = {
                key:'3-'+node.id.toString(),
                label:node.denumire,
                data: node,

                children: []
            }
            return n;
        }).forEach((data,index) => {

            if (data.data != null) {
                let parent = findParent(nodes[0], data!.data);
                let s=parent?.id+"-"+index.toString();
                let ico=parent?.icon+" "
                // console.log("--");
                // console.log(nodes[0]);
                // console.log(data.data);
                // console.log(parent);
                data.id=s;
                data.icon="pi pi-fw pi-eye";
                if (parent) {
                    parent.children?.push(data);

                }
            }


        })
    }



    let findParent = (nod: NodN, data: CafeneaSauLocalitate): NodN | null => {

        if (nod.data?.id === data.idParinte) {
            return nod;
        }
        if (nod === null) {
            return null;
        }

        if(nod.children!=undefined){
            for (let i = 0; i < nod.children.length; i++) {


                let n = findParent(nod.children[i], data);

                if (n != null) {

                    return n;
                }


            }

        }


        return null;


    }

    let getProduse=async (id:number)=>{
        let api=new PseudoApiService();
        let response=await api.ProduseDisponibile(id);
        let x=response as ProdusDisponibil[];
        if(x&&x.length>0){
            setProduse(x);
        }
    }



    let getListaCafele=async (idx:number):Promise<ProdusDisponibil[]|Error>=>{
        console.log("Id-ul="+idx)
        let appi=new PseudoApiService();

        let lista:ProdusDisponibil[]=[];
        try {
            console.log("Incerc");
            let response=appi.ProduseDisponibile(idx);


            return response;
        }catch (err){
            return new Error("llllk");
        }

    }

    let getAllProduse=async ()=>{
        let api=new PseudoApiService();
        let response=await api.getCafele();
        let x=response as ProdusDisponibil[];
        if(x&&x.length>0){
            setProduse(x);
        }
    }

    let selCaf=(e:TreeEventNodeEvent)=>{
        console.log(e.node.data.id);
        getProduse(e.node.data.id);
    }

    let hasCoffie=async (cafea:string,nod:NodN):Promise<boolean|Error>=>{

        if(nod.children!=undefined&&nod.children.length>0){
            let myl=nod.children.filter(p=>{
                console.log("CAut in nodul ");
                console.log(p);
                return Promise.resolve(hasCoffie(cafea,p));
            })
            console.log("Lista de copii filtrati TRUE");
            console.log(myl);
            if(myl.length>0){
                    return Promise.resolve(true);
                }

           return Promise.resolve(false);
        }else{
            console.log("Nodul--------------");
            console.log(nod);
            console.log("NU ARE COPII");
            let listaProd=await getListaCafele(nod.data!.id);
            console.log("Asta e lista de produse ale nodului:");
            // console.log(listaProd);
            if(listaProd instanceof Array<ProdusDisponibil>){
                console.log("Are urmatoarele produse");
                console.log(listaProd);
                return listaProd.filter(p=>p.denumire.toLowerCase().includes(cafea.toLowerCase())).length>0;
            }else{
                console.log("Nu are produse !!!!!");
                return Promise.resolve(false);

            }
            console.log("Result este");

            return Promise.resolve(false);
        }
        return Promise.resolve(false);
    }


    // let findCoffie=async (cafea:string,nod:NodN):Promise<boolean>=>{
    //     let lista:NodN[]=[];
    //     let listax:String[]=structuredClone(listaf);
    //     let res=false;
    //     console.log("sunt cu bodul");
    //     console.log(nod);
    //     if(nod.children!.length>0){
    //         nod.children?.map(n=>{
    //             return findCoffie(cafea,n);
    //         })
    //     }else{
    //         if(nod!=null){
    //             if(nod.key&&nod.data?.fel==="C"){
    //                 let respo=await getListaCafele(nod.data!.id);
    //                 if(respo.length>0){
    //                     console.log("am gasiiiiiy");
    //
    //                     if(respo.filter(p=>p.denumire.toLowerCase().includes(cafea.toLowerCase())).length>0){
    //                         console.log("........................");
    //                         console.log(nod.label);
    //                         if(nod.data!=null&&nod.data!=undefined){
    //                             let tata:NodN|null=findParent(nodes[0],nod.data);
    //                             if(tata!=null){
    //                                 tata.expanded=true;
    //                             }
    //                         }
    //                         setLista(prevState => [...prevState,nod.key as String]);
    //                         //let elems=document.getElementsByClassName("p-treenode-label");
    //                         //console.log(elems);
    //                         //setExpandedKeys(prevState => [...prevState,"'3-':true"]);
    //                         return true;
    //
    //                     }
    //                 }
    //
    //             }
    //
    //         }
    //     }
    //
    //
    //
    //
    // }

    let myFilter=async (e:TreeFilterValueChangeEvent):Promise<void>=>{
        console.log(e.value);


        let nods=[];

        setTimeout(()=>{
            setLista([]);
            setFilterv(e.value);

            //let nd:NodN[]=nodes[0].children.filter(p=>p.label?.includes(filterV));
            // @ts-ignore


        },250)


        // setFilterv((prevState => {
        //     [...,]
        // }))
        // let cls="p-tree-filter p-inputtext p-component";
        // let elem=document.getElementsByClassName(cls)[0];
        // console.log(elem);
    }
    return (
        <>
            <WrapperHome>
            <div className={"divL"}>
                <div className="card flex justify-content-center" onClick={()=>{ setProduse([]);}}>
                    {/*<Tree value={nodes} selectionMode="single" selectionKeys={selectedKey} onSelectionChange={(e) => setSelectedKey(e.value)} className="w-full md:w-30rem" />*/}

                    <Tree value={nodes} filter filterValue={filterV} expandedKeys={expandedKeys}  onFilterValueChange={myFilter} selectionMode="single" selectionKeys={selectedKey} onSelect={(e)=>{selCaf(e);}}  onExpand={()=>{
                            setProduse([]);}} onCollapse={()=>setProduse([])} className="w-full md:w-30rem" filterPlaceholder={"Ce cafea cautati?"}/>
                </div>

            </div>
                <div className={"divR"}>
                    {
                        produse!=null&&produse.length>0?(
                            <>
                                {
                                    produse.map(u=>{
                                        return <CardProdus produs={u}/>
                                    })
                                }
                            </>
                        ):""

                    }


                </div>

            </WrapperHome>
        </>

    )
}

export default Index;