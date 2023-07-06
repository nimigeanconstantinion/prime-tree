import React, {useEffect, useState} from "react";

import {useRef } from "react"
import {WrapperFormAdd} from "./AddSourceStyle";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus,faMinus} from "@fortawesome/free-solid-svg-icons";
import CustomFields from "./CustomFields";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";

import { Button } from 'primereact/button';
import ADDChild from "../AddSource/index"
import Api from "../../Api";
import BKNode from "../model/BKNode";
import customFields from "./CustomFields";


interface AddProps {
    parent:BKNode,
    superParent:string|null,
    back:Function,
    child:number,
    changed:number,
    kind:number
}

interface Fields{
    id:string,
    name:string,
    type:string,
    value:string
}

interface BKFields{
    id:string|null,
    customKey:string,
    type:string,
    value:string,
    parentRid:string|null
}

// interface Parinte{
//     id:string,
//     label:string,
//     descriere:string,
//
//
// }

interface PrimeNode{
    key: string,
    label: string,
    data:BKNode|null,
    icon: string,
    children: PrimeNode[]

}


const Index:React.FC<AddProps>=({parent,back,superParent,child,changed,kind})=>{

    const ic=useRef<SVGSVGElement>(null);
    const [campuri,setCampuri]=useState<Fields[]>([]);
    const [indx,setIndx]=useState(null);
    const [sursa,setSursa]=useState(new Object());
    const [ch,setCh]=useState(0);
    const [chld,setChld]=useState(0);

    const refL=useRef<HTMLInputElement>(null);
    const refD=useRef<HTMLInputElement>(null);

    const [nod,setNod]=useState<BKNode>({id:null,label:"",descriere:"",cfields:[],subordinates:[]});

    const [fIndx,setFIndx]=useState<number|null>(null);
    const refFld=useRef(null);


    useEffect(()=>{

        console.log("Intru in ADDChild cu");
        console.log("Label superparent "+superParent)
        console.log("Si parent :")
        console.log(parent);
        console.log("AM PRIMIT KIND="+kind);
        if(kind==1){
            console.log("Adaugare");
            let emptyNode:BKNode={
                id:"",
                label:"",
                descriere:"",
                cfields:[],
                subordinates:[]
            }
            setSursa(emptyNode);
            setNod(emptyNode);
        }else{
            console.log("EDITARE NOD");
            console.log(parent);
            setSursa(parent);
            setNod(parent);

        }


        if(refL.current!=null){

            // console.log("888888888888888888888888888888888")
            // console.log(nod);
            // console.log(refL.current.textContent)
            refL.current.textContent=nod.label;

            // Object.values(nod)[1];
            // console.log("descriere nod="+nod.descriere);

        }
        if(refD.current!=null){
            console.log("Descriere nod="+nod.descriere);
            refD.current.textContent=nod.descriere;

        }

    },[])

    useEffect(()=>{
        console.log("IATA SURSA DE ADTE")


        let listaf:Fields[]=[];
        if(refL.current!=null){

            refL.current.value=nod!.label;
                // Object.values(nod)[1];

        }

        if(refD.current!=null){

            refD.current.value=nod!.descriere;
            // Object.values(nod)[1];

        }
         nod.cfields.map(c=>{
             if(c.id!=null){
                 listaf.push({id:c!.id,name:c.customKey,type:c.type,value:c.value});

             }
        })

        setCampuri(listaf);
        console.log(nod);

    },[sursa])

    // useEffect(()=>{
    //     setSursa(parent as BKNode);
    // })


    let add=()=>{
        let elm:Fields={
            id:"",
            name:"",
            type:"string",
            value:""
        }
        setCampuri(prevState => [...prevState,elm])

    }

    let delFld=()=>{
        let listaC:Fields[]=structuredClone(campuri);
        if(fIndx!=null){
            listaC.splice(fIndx,1);

            setCampuri(listaC);
        }


    }

    let addChld=()=>{
        setChld(1);
    }

    let minus=(ind:number|null)=>{
        if(ind!=null){
            setFIndx(ind);

        }

    }


    let bkpress=()=>{
        back();
    }

    let saveClk=async (e:any)=>{
        e.preventDefault();
        let api=new Api();
        console.log("ATI APASAT SAVE cu kind="+kind);
        if(kind==0){

            let lb=refL.current!.value;
            let d=refD.current!.value;
            console.log("descriere="+refD.current!.value);
            nod!.label=lb;
            nod!.descriere=d;
            nod!.cfields=[]
            // let noded:BKNode={
            //     id: parent!.id,
            //     label: lb,
            //     descriere: refD.current!.value,
            //     cfields:[],
            //     subordinates:parent.subordinates
            // }
            campuri.map(c=>{
                let cf:BKFields={
                    id:c.id,
                    customKey:c.name,
                    type:c.type,
                    value:c.value,
                    parentRid:nod!.id
                }
                if(nod!.id!=null){
                    nod!.cfields.push({id:cf.id,customKey:cf.customKey,type:cf.type,value:cf.value,parentRid:nod!.id});

                }
            })
            let supp=superParent;
            try {
                console.log("Fac update la nodul");
                console.log(nod);
                if(nod!=undefined){
                    await api.saveNode(nod);

                };
                back();
            }catch (e) {
                console.log("Error ");
                back();
            }
        }else{
            console.log("IN ADAUGARE la SAVE")
            let lb=refL.current!.textContent;
            let d=refD.current!.textContent;

            let noda:BKNode={
                id:null,
                label:refL.current!.value,
                descriere:refD.current!.value,
                cfields:[],
                subordinates:nod!.subordinates
            }

            // let aNode:BKNode={id:null,descriere:"",label:"",cfields:[],subordinates:[]};
            console.log("La adaugare cu noul nod cu supeparent="+superParent);
            console.log(noda);
            let labelP:String="null"
            if(parent!=null&&parent.id!=null){
                labelP=parent.label;
            }

            try{
                console.log("Adaug nodul");
                console.log(noda);
                console.log("Label parinte");
                console.log(labelP);

                let rsp= await api.addChild(noda,labelP);

                 console.log("Primesc la adaugare nod");
                 console.log(rsp);

            }catch (e) {
                console.log("ERRRRRRRR la adaugare nod")
            }

            let lbl:string=refL.current!.value;

            let response=await api.getNodeByLabel(lbl);
            console.log("Raspuns dupa adaugare nod");
            console.log(response);



            let aNode:BKNode=response as BKNode;

            if(aNode!=null&&aNode.id!=null){

                campuri.map(c=>{
                    let cf:BKFields={
                        id:c.id,
                        customKey:c.name,
                        type:c.type,
                        value:c.value,
                        parentRid:aNode!.id
                    }

                    if(aNode.id!=null){
                        aNode.cfields.push({id:c.id,customKey:c.name,type:c.type,value:c.value,parentRid:aNode.id});

                    }
                })
                        let supp=superParent;
                        try {
                            if(nod!=undefined){
                                await api.saveNode(aNode);

                            }
                            back();
                        }catch (e) {
                            console.log("Error ");
                            back();
                        }

            }


        }


    }

    return(
        <WrapperFormAdd>


            <form className={"formadd"}>
                <label htmlFor={"iid"}>ID </label>
                {
                    nod?.id?(
                        <p>{nod.id}</p>

                    ):""
                }

                <label htmlFor={"lbl"}>Label </label>
                <input id={"lbl"} type={"text"} ref={refL}/>

                <label htmlFor={"desc"}>Descriere </label>
                <input id={"desc"} type={"text"} ref={refD} />



                <div className={"commands unu"}>
                    <FontAwesomeIcon className={"addbtn"} icon={faPlus} onClick={add}/>
                    <FontAwesomeIcon className={"delbtn"} icon={faMinus} onClick={delFld} />
                    <p>Campuri Custom</p>
                </div>
                <div className={"commands doi"}>
                    <p id={"col1"}>Nume</p>
                    <p id={"col2"}>Tip</p>
                    <p id={"col3"}>Valoare</p>

                </div>

                <div id={"divb"}>
                    <div className={"fields"} ref={refFld} >

                        {
                            campuri!=null?(
                                <CustomFields lista={campuri} minus={minus}/>
                                // <p>{Object.values(Object.values(campuri)[0])[3]}</p>
                            ):""
                        }

                    </div>
                    <div className={"btnarea"}>
                        <Button className={"btnd"} label="Save" icon="pi pi-check" onClick={(e)=>{
                            saveClk(e);
                        }} />

                        <Button className={"btnd"} label="Back" icon="pi pi-arrow-left" onClick={bkpress} />

                    </div>


                </div>


            </form>


        </WrapperFormAdd>
    );
}

export default Index;