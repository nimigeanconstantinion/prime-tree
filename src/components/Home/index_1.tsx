import React, {ChangeEvent, cloneElement, useEffect, useRef, useState} from "react";
import {CafeneaSauLocalitate} from "../model/CafeneaSauLocalitate";
import {faCoffee} from "@fortawesome/free-solid-svg-icons/faCoffee";
import Nod from "../model/Nod";
import {ListaCafenele, ProdusDisponibil, PseudoApiService} from "../model/ListaCafenele";
import {
    Tree,
    TreeEventNodeEvent,
    TreeExpandedKeysType,
    TreeFilterInputOptions,
    TreeFilterValueChangeEvent, TreeProps
} from 'primereact/tree';
import { ContextMenu } from 'primereact/contextmenu';
import { MenuItem } from 'primereact/menuitem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus,faMinus,faEdit, faPersonCirclePlus} from "@fortawesome/free-solid-svg-icons";

import TreeNode from "primereact/treenode";
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';// icons
import { InputText } from "primereact/inputtext";

import filterAsync from "node-filter-async";
import 'primeflex/primeflex.css';
import NodN from "../model/NodN";
import {WrapperHome} from "./HomeStyle";
import CardProdus from "../CardProdus";
import {FilterService} from "primereact/api";
import filter = FilterService.filter;
import {TreeN} from "../model/TreeN";
import INode from "../model/INode";
import useAsyncEffect from "use-async-effect";
import {FormEvent} from "primereact/ts-helpers";
import {isBoolean} from "util";
import * as util from "util";
import { read, utils, writeFile } from 'xlsx';
import * as XLSX from 'xlsx-js-style';
import Api from "../../Api";
import Child from "../AddSource/index"
//<script lang="javascript" src="dist/xlsx.bundle.js"></script>


//import XLSX, {utils, writeFileXLSX, XLSX$Consts, XLSX$Utils} from "xlsx";

interface SelNode{
        id:number,
        label:string,
        descriere:string,
        tip:string,
        children:[]
}


interface TreePr extends TreeProps{

}

//
//const items: MenuItem[] = [
    // {
    //     label: 'File',
    //     icon: 'pi pi-fw pi-file',
    //     items: [
    //         {
    //             label: 'New',
    //             icon: 'pi pi-fw pi-plus',
    //             items: [
    //                 {
    //                     label: 'Bookmark',
    //                     icon: 'pi pi-fw pi-bookmark'
    //                 },
    //                 {
    //                     label: 'Video',
    //                     icon: 'pi pi-fw pi-video'
    //                 },
    //
    //             ]
    //         },
    //         {
    //             label: 'Delete',
    //             icon: 'pi pi-fw pi-trash'
    //         },
    //         {
    //             separator: true
    //         },
    //         {
    //             label: 'Export',
    //             icon: 'pi pi-fw pi-external-link'
    //         }
    //     ]
    // },
    // {
    //     label: 'Edit',
    //     icon: 'pi pi-fw pi-pencil',
    //     items: [
    //         {
    //             label: 'Left',
    //             icon: 'pi pi-fw pi-align-left'
    //         },
    //         {
    //             label: 'Right',
    //             icon: 'pi pi-fw pi-align-right'
    //         },
    //         {
    //             label: 'Center',
    //             icon: 'pi pi-fw pi-align-center'
    //         },
    //         {
    //             label: 'Justify',
    //             icon: 'pi pi-fw pi-align-justify'
    //         },
    //
    //     ]
    // },
    // {
    //     label: 'Users',
    //     icon: 'pi pi-fw pi-user',
    //     items: [
    //         {
    //             label: 'New',
    //             icon: 'pi pi-fw pi-user-plus',
    //
    //         },
    //         {
    //             label: 'Delete',
    //             icon: 'pi pi-fw pi-user-minus',
    //
    //         },
    //         {
    //             label: 'Search',
    //             icon: 'pi pi-fw pi-users',
    //             items: [
    //                 {
    //                     label: 'Filter',
    //                     icon: 'pi pi-fw pi-filter',
    //                     items: [
    //                         {
    //                             label: 'Print',
    //                             icon: 'pi pi-fw pi-print'
    //                         }
    //                     ]
    //                 },
    //                 {
    //                     icon: 'pi pi-fw pi-bars',
    //                     label: 'List'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     label: 'Events',
    //     icon: 'pi pi-fw pi-calendar',
    //     items: [
    //         {
    //             label: 'Edit',
    //             icon: 'pi pi-fw pi-pencil',
    //             items: [
    //                 {
    //                     label: 'Save',
    //                     icon: 'pi pi-fw pi-calendar-plus'
    //                 },
    //                 {
    //                     label: 'Delete',
    //                     icon: 'pi pi-fw pi-calendar-minus'
    //                 }
    //             ]
    //         },
    //         {
    //             label: 'Archive',
    //             icon: 'pi pi-fw pi-calendar-times',
    //             items: [
    //                 {
    //                     label: 'Remove',
    //                     icon: 'pi pi-fw pi-calendar-minus'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     separator: true
    // },
//     {
//         label: 'Quit',
//         icon: 'pi pi-fw pi-power-off',
//         command: (event) => {
//
//         }
//     }
// ];



// const items: MenuItem = [
//     { label: 'View', icon: 'pi pi-fw pi-search' },
//     { label: 'Delete', icon: 'pi pi-fw pi-trash' }
// ];


function Index_1() {
    const [nodes, setNodes] = useState<NodN[]>([
        {
            key: '0',
            label: 'Judete',
            data: null,
            icon: 'pi pi-fw pi-check',
            children:[]

        },
    ]);
    const [add,setAdd]=useState(0);
    const [selectedKey, setSelectedKey] = useState<string>('');
    const [expandedKeys, setExpandedKeys] = useState<TreeExpandedKeysType>({'0-0': true,'1-':false,'2-':false});
    const [produse,setProduse]=useState<ProdusDisponibil[]>([]);
    const [filterV,setFilterv]=useState("");
    const [listaf,setLista]=useState<String[]>([]);
    const [numb,setNumb]=useState(0);
    const [parinte,setParinte]=useState(null);

    const [ar,setAr]=useState(false);
    const [ch,setCh]=useState(0);
    const [ctx,setCtx]=useState(0);
    const cm = useRef(null);
  //  const cm = useRef(null);

    // const items: MenuItem[] = [
    //     { label: 'View', icon: 'pi pi-fw pi-search' },
    //     { label: 'Delete', icon: 'pi pi-fw pi-trash' }
    // ];

    const items: MenuItem[] = [

        {
            label: "ljklkllk",
            icon: <FontAwesomeIcon className={"icomen"} icon={faEdit}/>,
            command: (event) => {
                selmenu("EDIT");
            }
        },
        {
            label: 'Delete',
            icon: <FontAwesomeIcon className={"icomen"} icon={faMinus}/>,
            command: (event) => {
                selmenu("DELETE");
            }
        },
        {
            label: 'Add Child',
            icon: <FontAwesomeIcon className={"icomen"} icon={faPersonCirclePlus} beat />,
            command: (event) => {
                selmenu("EDIT");
            }
        },

    {
        label: 'Quit',
        icon: <FontAwesomeIcon className={"icomen"} icon={faPlus}/>,
        command: (event) => {
            selmenu("QUIT");
    }
    }

];


    useEffect(() => {
        //createTree(filterV);
        loadTreeFromBKEnd();
    }, []);


    useEffect(()=>{
        // console.log("ch parinte");
            setCh(prevState =>prevState+1);
         console.log("Am selectat ch ="+ch);
        console.log(parinte);

    },[parinte])

    useEffect(()=>{


    },[nodes])



    useAsyncEffect(async ()=>{
        if(filterV.length>3){
            createTree(filterV);
        }

    },[filterV])


    useEffect(()=>{
    },[listaf])




    let createTree=async (filtru:string)=>{
        if(filtru===""){
            getJudete();
            getLocalitati();
            getCafenele();
            getAllProduse();
        }else{

          await alteJud();
          await alteLoca();
          await alteCaf();

        }


    }




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


        nodes[0].children=lista;
        let n:NodN[]=[];
        n.push({data:null,id:'0',label:'Judete',children:[]});
        n[0].children=lista;
        setNodes(n);
    }

 //    let getJudeteFiltered = async (): Promise<void> => {
 //        let newT:NodN[]=[];
 //        setNodes(prevState => {return [{data:null,id:'0',label:'Judete',children:[]}]});
 //        let listaLJudete= await filterAsync(ListaCafenele.cafenele.filter(c=>c.idParinte==null), async (value, index) => {
 // //           console.log(`filtering [${index}]: ${value.denumire}`);
 //            return await altfiltr(value.id) ;
 //        }).then((data)=>{
 //
 //            nodes[0].children=data.map((node, index) => {
 //                let n: NodN = {
 //                    key: '1-' + node.id.toString(),
 //                    data: node,
 //                    label: node.denumire,
 //                    icon: "pi pi-fw pi-file",
 //                    children: []
 //
 //                }
 //                return n;
 //            });
 //            setNodes(nodes);
 //
 //
 //        });
 //
 //
 //    }

    let alteJud=async ():Promise<void|Error>=>{
        let newT:NodN[]=[];
        setNodes(prevState => {return [{data:null,id:'0',label:'Judete',children:[]}]});
        let listaJudete=await filterJud();
        let listaNoduri=listaJudete.map((node,index) => {
            let n: NodN = {
                key:'1-'+node.id.toString(),
                data: node,
                label: node.denumire,
                icon: "pi pi-fw pi-file",
                children: []

            }
            return n;
        })
        nodes[0].children=listaNoduri;
        setNodes(nodes);

    }

    let loadTreeFromBKEnd=async ()=>{
        let api=new Api();
        let newT:Object[]=[];
        newT=await api.getTree();
        setNodes(newT as NodN[]);

    }

    let alteLoca=async ():Promise<void|Error>=>{
        let newT:NodN[]=[];
        let listaLoca=await filterLoca();
        listaLoca.map((node,index) => {
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
                // console.log("--");
                // console.log(nodes[0]);
                // console.log(data.data);
                // console.log(parent);
                data.id=s;
                data.icon="pi pi-fw pi-home";
                if (parent) {
                    parent.children?.push(data);

                }
            }


        })
        setNodes(nodes);

    }

    let alteCaf=async ():Promise<void>=>{
        let newT:NodN[]=[];
        let listaCaf=await filterCaf();
        listaCaf.map((node,index) => {
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
        setNodes(nodes);

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
                // console.log("--");
                // console.log(nodes[0]);
                // console.log(data.data);
                // console.log(parent);
                data.id=s;
                data.icon="pi pi-fw pi-home";
                if (parent) {
                    parent.children?.push(data);

                }
            }


        })
    }


    let asyncFilter = async (arr:CafeneaSauLocalitate[], predicate:Function):Promise<CafeneaSauLocalitate[]> => {
        const results = await Promise.all(arr.map(a=>predicate(a.id)));
        return arr.filter((v, index) => results[index]);
    }

    let filterJud=async ():Promise<CafeneaSauLocalitate[]>=>{

        let judete=ListaCafenele.cafenele.filter(s=>s.idParinte==null);
        return await asyncFilter(judete,altfiltr);

    }

    let filterLoca=async ():Promise<CafeneaSauLocalitate[]>=>{

        let localitati=ListaCafenele.cafenele.filter(s=>s.fel==="L");
        return await asyncFilter(localitati,altfiltr);

    }

    let filterCaf=async ():Promise<CafeneaSauLocalitate[]>=>{

        let cafenele=ListaCafenele.cafenele.filter(s=>s.fel==="C");
        return await asyncFilter(cafenele,altfiltr);

    }


    // let getLocalitatiFiltered =async ():Promise<void> => {
    //     let nods:NodN[]=[];
    //     nods=structuredClone(nodes);
    //    // console.log("Localitati="+ListaCafenele.cafenele.filter(l => l.fel ==="L"&&l.idParinte!=null).length);
    //     let listaLocalitati= await filterAsync(ListaCafenele.cafenele.filter(c=>c.fel==="L"&&c.idParinte!=null), async (value, index) => {
    //         console.log(`filtering [${index}]: ${value.denumire}`);
    //         return await altfiltr(value.id) ;
    //     }).then((data)=>{return data});
    //
    //
    //     let listaNoduri=listaLocalitati.map((node,index) => {
    //         let n: NodN = {
    //             key:'2-'+node.id.toString(),
    //             label:node.denumire,
    //             data: node,
    //
    //             children: []
    //         }
    //
    //
    //         return n;
    //     })
    //
    //         listaNoduri.forEach((data,index) => {
    //
    //             if (data.data != null) {
    //                 let parent = findParent(nods[0], data!.data);
    //                 console.log("===========================================")
    //                 console.log(parent);
    //                 let s=parent?.id+"-"+index.toString();
    //                 let ico=parent?.icon+" "
    //                 console.log("--");
    //                 console.log(nods[0]);
    //                 console.log(data.data);
    //                 console.log(parent);
    //                 data.id=s;
    //                 data.icon="pi pi-fw pi-home";
    //                 if (parent) {
    //                     parent.children?.push(data);
    //
    //                 }
    //             }
    //
    //
    //         });
    //     console.log("Gata cu localitatile");
    //     console.log(nods);
    //     setNodes(nods);
    //
    // }



    let altfiltr=async (idNod:number):Promise<boolean>=>{
        let res:boolean[]=[];
        let nodData=getDataByID(idNod);
        let listaCopii=getChildren(idNod);
        if(nodData?.fel==="C"){
            return Promise.resolve(areCafeaua(idNod,filterV))
                .then((data)=>{return data})
                .then((result)=>{
                    if(result==true){
                        return true
                    }else{
                        return false
                    }
                })
        }else{
            if(listaCopii.length>0){
                // return await filterAsync(listaCopii, async (value, index) => {
                //         return await altfiltr(value.id) ;
                //     }).then((data)=>{return data.length>0});

                let response=await Promise.all(listaCopii.map(a=>altfiltr(a.id)));
                if(response instanceof Array&&response.filter(f=>f==true).length!=0){
                    return true
                }
                return false
            }else{
                return false;
            }
        }
    }

    let getDataByID=(idN:number):CafeneaSauLocalitate|null=>{
        let listaf=ListaCafenele.cafenele.filter((c)=>c.id==idN);
        if( listaf.length>0){
            return listaf[0];
        }else{
            return null;
        }
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

    let areCafeaua=async (idCafenea:number,cafea:string):Promise<boolean|null>=>{
        let result=Promise.resolve(getListaCafeleID(idCafenea).then((data)=>{
            if(data!=null){
                return data.filter(c=>c.denumire.toLowerCase().includes(cafea.toLowerCase())).length!=0;
            }
            return false;
        }));

        return result.then((data)=>{return data});
    }

    // let nodTrue=async (idNod:number,cafea:string):Promise<boolean|null>=>{
    //   let copii=getChildren(idNod);
    //
    //   if(copii.length>0){
    //       while(copii.length>0){
    //           if(await nodTrue(copii[0].id,cafea).then((succes)=>{return succes})==true){
    //             return true;
    //           }
    //           copii.splice(0);
    //       }
    //      return null;
    //   }else{
    //
    //       if(await areCafeaua(idNod,cafea)==true){
    //           return true;
    //       }else{
    //           return null;
    //       }
    //   }
    //
    // }

    let getChildren=(idS:number):CafeneaSauLocalitate[]=>{
        return ListaCafenele.cafenele.filter(c=>c.idParinte==idS);
    }

    let getListaCafeleID=async (id:number):Promise<ProdusDisponibil[]|null>=>{
        let api=new PseudoApiService();
        let response=await api.ProduseDisponibile(id);
        if(response instanceof Error){
            return null;
        }
        return response;

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

    let selNode=(e:TreeEventNodeEvent)=>{
        console.log("Am selectat");
        setParinte(e.node.data);

    }

    // let hasCoffie=async (cafea:string,nod:NodN):Promise<boolean|Error>=>{
    //
    //     if(nod.children!=undefined&&nod.children.length>0){
    //         let myl=nod.children.filter(p=>{
    //             console.log("CAut in nodul ");
    //             console.log(p);
    //             return Promise.resolve(hasCoffie(cafea,p));
    //         })
    //         console.log("Lista de copii filtrati TRUE");
    //         console.log(myl);
    //         if(myl.length>0){
    //                 return Promise.resolve(true);
    //             }
    //
    //        return Promise.resolve(false);
    //     }else{
    //         console.log("Nodul--------------");
    //         console.log(nod);
    //         console.log("NU ARE COPII");
    //         let listaProd=await getListaCafele(nod.data!.id);
    //         console.log("Asta e lista de produse ale nodului:");
    //         // console.log(listaProd);
    //         if(listaProd instanceof Array<ProdusDisponibil>){
    //             console.log("Are urmatoarele produse");
    //             console.log(listaProd);
    //             let retres=listaProd.filter(p=>p.denumire.toLowerCase().includes(cafea.toLowerCase())).length;
    //             return listaProd.filter(p=>p.denumire.toLowerCase().includes(cafea.toLowerCase())).length>0;
    //         }else{
    //             console.log("Nu are produse !!!!!");
    //             return Promise.resolve(false);
    //
    //         }
    //         console.log("Result este");
    //
    //         return Promise.resolve(false);
    //     }
    //     return Promise.resolve(false);
    // }




    let myFilter=async (e:TreeFilterValueChangeEvent):Promise<void>=>{
        console.log(e.value);


       // let nods:NodN[]=[];

        //setTimeout(()=>{
            setLista([]);
         //   setFilterv(e.value);

            //let nd:NodN[]=nodes[0].children.filter(p=>p.label?.includes(filterV));
            // @ts-ignore
         //   nods.push({data:null,id:'0',label:'Judete',children:[]});
          //  setNodes(nods);

        //},150)


        // setFilterv((prevState => {
        //     [...,]
        // }))
        // let cls="p-tree-filter p-inputtext p-component";
        // let elem=document.getElementsByClassName(cls)[0];
        // console.log(elem);
    }

    let filterTree=(e:ChangeEvent<HTMLInputElement>)=>{
        const wb = utils.book_new();

// STEP 2: Create data rows and styles
//         let row = [
//             { v: "Courier: 24", t: "s", s: { font: { name: "Courier", sz: 24 } } },
//             { v: "bold & color", t: "s", s: { font: { bold: true, color: { rgb: "FF0000" } } } },
//             { v: "fill: color", t: "s", s: { fill: { fgColor: { rgb: "E9E9E9" } } } },
//             { v: "line\nbreak", t: "s", s: { alignment: { wrapText: true } } },
//         ];
//
// // STEP 3: Create worksheet with rows; Add worksheet to workbook
//         const ws = utils.aoa_to_sheet([row]);
//         ws["!merges"]=[
//                 {s:{r:0,c:0},e:{r:1,c:0}} /* A1:A2 */
//             ]
//         utils.book_append_sheet(wb, ws, "readme demo");
//
// // STEP 4: Write Excel file to browser
//        XLSX.writeFile(wb, "xlsx-js-style-demo.xlsx");

       setAr(false);

       setNumb(0);
       setFilterv(e.target.value);


    }

    let back=()=>{
        setAdd(0);
        setCh(1);
        setParinte(Object);
    }

    let selmenu=(sel:string)=>{
        console.log("Ati apasat "+sel);
    }

    let context=(e:TreeEventNodeEvent)=>{
        console.log("Context pentru");
        console.log(e.node.data);
        setCtx(1);
        if(cm.current!=null){
           // cm!.current.show(e);

        }
    }

    return (
        <>
            <script lang="javascript" src="dist/xlsx.bundle.js"></script>

            <WrapperHome>


            <div className={"divL"} >
                {/*<div className={"ctxmenu"}>*/}
                {/*    {*/}
                {/*        ctx>0?(*/}
                {/*            <>*/}
                {/*                <ContextMenu global model={items} breakpoint="767px"/>*/}

                {/*            </>*/}

                {/*        ):""*/}
                {/*    }*/}


                {/*</div>*/}



                <div className="card flex justify-content-center" onClick={()=>{ setProduse([]);}}>
                    <ContextMenu global model={items} ref={cm}></ContextMenu>
                    {/*<Tree value={nodes} selectionMode="single" selectionKeys={selectedKey} onSelectionChange={(e) => setSelectedKey(e.value)} className="w-full md:w-30rem" />*/}

                    {/*<Tree value={nodes} filter expandedKeys={expandedKeys} selectionMode="single" selectionKeys={selectedKey} onSelect={(e)=>{selCaf(e);}}  onExpand={()=>{*/}
                    {/*        setProduse([]);}} onCollapse={()=>setProduse([])} className="w-full md:w-30rem" filterPlaceholder={"Ce cautati?"}/>*/}
                    <Tree value={nodes} filter expandedKeys={expandedKeys} selectionMode="single" selectionKeys={selectedKey} onSelect={(e)=>{selNode(e);}}  onExpand={()=>{
                        setProduse([]);}} onCollapse={()=>setProduse([])} className="w-full md:w-30rem" filterPlaceholder={"Ce cautati?"} onContextMenu={context}/>

                </div>




            </div>
                <div className={"divR"}>

                    {
                        ch>0&&parinte!==null?(
                            <>
                                {/*<p>{parinte[`${Object.keys(parinte)[1]}`]}</p>*/}

                                <Child parent={parinte} back={back} child={0} changed={ch}/>
                            </>

                        ):
                            <>

                                <div className={"divsearch"}>
                                    <p>Search Coffee</p>
                                    <div className="card flex flex-wrap justify-content-center gap-3">
                                <span className="p-input-icon-left">
                                    <i className="pi pi-search" />
                                    <InputText  placeholder="Search" onBlur={(e)=>{filterTree(e)}} />
                                </span>
                                    </div>


                                </div>
                                {
                                    produse!=null&&produse.length>0?(
                                        <div className={"divshow"}>
                                            {
                                                produse.map(u=>{
                                                    return <CardProdus produs={u}/>
                                                })
                                            }
                                        </div>
                                    ):""

                                }




                            </>



                    }

                </div>

            </WrapperHome>
        </>

    )
}

export default Index_1;