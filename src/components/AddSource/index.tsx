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


interface AddProps {
    parent:Object,
    back:Function,
    child:number,
    changed:number
}

interface Fields{
    id:number|null,
    name:string,
    type:string,
    value:string
}

interface Parinte{
    id:number,
    label:string,
    descriere:string,
    tip:string,


}

const Index:React.FC<AddProps>=({parent,back,child,changed})=>{

    const ic=useRef<SVGSVGElement>(null);
    const [campuri,setCampuri]=useState<Fields[]>([]);
    const [indx,setIndx]=useState(null);
    const [sursa,setSursa]=useState(new Object());
    const [ch,setCh]=useState(0);
    const [chld,setChld]=useState(0);
    const refL=useRef<HTMLInputElement>(null);
    const [fIndx,setFIndx]=useState<number|null>(null);
    const refFld=useRef(null);
    useEffect(()=>{

        console.log("teeeeeezssrtd");
        console.log(parent);
      //  console.log(Object.values(parinte));
        setSursa(parent);
        if(refL.current!=null){
            console.log("888888888888888888888888888888888")
            console.log(refL.current.textContent)
            refL.current.textContent=Object.values(parent)[1];
            // refL.current.value="kjkkjkkkjkkjkkkkk";

        }

    },[])

    useEffect(()=>{
         console.log("alalja; ksdkl kldslk lskdsdf lk")
        if(refL.current!=null){

            refL.current.value=Object.values(sursa)[1];

        }
        if(Object.values(sursa).length>4){
            let val:Object[]=Object.values(Object.values(sursa)[6]);
            let listaf:Fields[]=[];
            val.map((x,index)=>{
                let yf:Fields={
                    id:Object.values(x)[0],
                    name:Object.values(x)[2],
                    type:Object.values(x)[4],
                    value:Object.values(x)[3]
                }
                listaf.push(yf);
            })
            setCampuri(listaf);

        }

    },[sursa])

    useEffect(()=>{
     setSursa(parent);
    })
// useEffect(()=>{
//     setSursa(parinte as Object);
//
//     console.log("-----------Unloaded="+changed);
// })
//     useEffect(()=>{
//         console.log("klqjelqjwelqjwleqjlwejlqjwelqjwlejlqjewlqjeljqlj")
//     },[ch,parinte])

    // useEffect(()=>{
    //     console.log("Chjsjdkkdhlhldjldjljdljld "+changed)
    //
    // },[ch])

    let add=()=>{
        let elm:Fields={
            id:null,
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
            console.log("Noua lista=");
            console.log(listaC);
            setCampuri(listaC);
        }


    }

    let addChld=()=>{
        console.log("Press add chld");
        setChld(1);
    }

    let minus=(ind:number|null)=>{
        console.log("Helooou "+ind);
        if(ind!=null){
            setFIndx(ind);

        }

    }


    let bkpress=()=>{
        back();
    }

    let saveClk=(e:any)=>{
        console.log(e);
        e.preventDefault();
     //   let api=new Api();
        console.log("Am apasat save");
        console.log(campuri);

    }

    return(
        <WrapperFormAdd>
            {/*{*/}
            {/*    changed?(<>*/}

            {/*                {*/}
            {/*                    child == 0 ?*/}
            {/*                        <>*/}

                                        <form className={"formadd"}>
                                            <label htmlFor={"iid"}>ID </label>
                                            <input id={"iid"} type={"text"} value={Object.values(parent)[0]}/>

                                            <label htmlFor={"lbl"}>Label </label>
                                            <input id={"lbl"} type={"text"} ref={refL}/>

                                            <label htmlFor={"desc"}>Descriere </label>
                                            <input id={"desc"} type={"text"} value={Object.values(parent)[2]}/>

                                            <label htmlFor={"tip"}>Tip </label>
                                            <input id={"tip"} type={"text"} />

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
                                                    {/*<Button className={"btnd"} label="Delete" icon="pi pi-trash" />*/}

                                                    {/*<Button className={"btnd"} label="Add Child" icon={*/}

                                                    {/*    <FontAwesomeIcon icon={faPlus}/>*/}

                                                    {/*} onClick={addChld} />*/}

                                                    <Button className={"btnd"} label="Back" icon="pi pi-arrow-left" onClick={bkpress} />

                                                </div>


                                               </div>


                                        </form>

            {/*                        </>*/}

            {/*                    : (*/}
            {/*                        <>*/}
            {/*                            /!*<form className={"formadd"}>*!/*/}
            {/*                            /!*    <label htmlFor={"iid"}>ID </label>*!/*/}
            {/*                            /!*    <input id={"iid"} type={"text"} defaultValue={0} />*!/*/}

            {/*                            /!*    <label htmlFor={"lbl"}>Label </label>*!/*/}
            {/*                            /!*    <input id={"lbl"} type={"text"} defaultValue={""} />*!/*/}

            {/*                            /!*    <label htmlFor={"desc"}>Descriere </label>*!/*/}
            {/*                            /!*    <input id={"desc"} type={"text"} defaultValue={""}/>*!/*/}

            {/*                            /!*    <label htmlFor={"tip"}>Tip </label>*!/*/}
            {/*                            /!*    <input id={"tip"} type={"text"} />*!/*/}

            {/*                            /!*    <div className={"commands unu"}>*!/*/}
            {/*                            /!*        <FontAwesomeIcon className={"addbtn"} icon={faPlus} onClick={add}/>*!/*/}
            {/*                            /!*        <FontAwesomeIcon className={"delbtn"} icon={faMinus} />*!/*/}
            {/*                            /!*        <p>Campuri Custom</p>*!/*/}
            {/*                            /!*    </div>*!/*/}
            {/*                            /!*    <div className={"commands doi"}>*!/*/}
            {/*                            /!*        <p id={"col1"}>Nume</p>*!/*/}
            {/*                            /!*        <p id={"col2"}>Tip</p>*!/*/}
            {/*                            /!*        <p id={"col3"}>Valoare</p>*!/*/}

            {/*                            /!*    </div>*!/*/}

            {/*                            /!*    <div id={"divb"}>*!/*/}
            {/*                            /!*        <div className={"fields"}>*!/*/}

            {/*                            /!*            {*!/*/}
            {/*                            /!*                campuri.length>0?(*!/*/}
            {/*                            /!*                    <CustomFields lista={campuri} minus={minus}/>*!/*/}
            {/*                            /!*                ):""*!/*/}
            {/*                            /!*            }*!/*/}

            {/*                            /!*        </div>*!/*/}
            {/*                            /!*        <div className={"btnarea"}>*!/*/}
            {/*                            /!*            <Button className={"btnd"} label="Save" icon="pi pi-check" />*!/*/}
            {/*                            /!*            /!*<Button className={"btnd"} label="Delete" icon="pi pi-trash" />*!/*!/*/}

            {/*                            /!*            /!*<Button className={"btnd"} label="Add Child" icon={*!/*!/*/}

            {/*                            /!*            /!*    <FontAwesomeIcon icon={faPlus}/>*!/*!/*/}

            {/*                            /!*            /!*}  />*!/*!/*/}

            {/*                            /!*            <Button className={"btnd"} label="Back" icon="pi pi-arrow-left"  />*!/*/}

            {/*                            /!*        </div>*!/*/}


            {/*                            /!*    </div>*!/*/}


            {/*                            /!*</form>*!/*/}

            {/*                        </>*/}
            {/*                    )*/}


            {/*                }*/}



            {/*        </>*/}

            {/*    ):*/}
            {/*    <>*/}

            {/*        ""*/}

            {/*    </>*/}

            {/*}*/}
            {/*{Object.values(parent)[1]}*/}

        </WrapperFormAdd>
    );
}

export default Index;