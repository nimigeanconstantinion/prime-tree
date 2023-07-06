import { Button } from 'primereact/button';
import {useEffect, useRef, useState} from "react";
import {WrapperPatternd} from "./PatternStyle";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import {forEach} from "react-bootstrap/ElementChildren";
const Index=()=>{

    const [showinfo,setShowinfo]=useState(false);
    const refPat=useRef<HTMLInputElement>(null);
    const [pattern,SetPattern]=useState<string>("");
    const [nextV,SetNExtV]=useState<string>("");

    const [inputValue, setInputValue] = useState('');




    useEffect(()=>{

        //handlePattern
        console.log("pattern change")
        console.log(pattern);
        console.log("Iata next val")

        console.log(nextIdentity(pattern));

    },[pattern])


    let showInfo=()=>{

            setShowinfo(true);
    }

    let checkPattern=(e:any)=>{

        if(refPat.current!=null){
            console.log(refPat.current.value)
            let patt=refPat.current.value;
            let k=0;

            // console.log(patt.split("").map(c=>{
            //     if(c=='{')  return 1;
            //     if(c=='}')  return -1;
            //      return 0;
            // }).reduce((a,n) => a=a+n));
            console.log(k);
        }
    }

    let nextIdentity=(sir:string):string=>{

         let arr=sir.split(/{{|\}\}/);
         
         let nextV:string=arr.map(e=>{
             if(e.includes('#')){
                return e.split("").map((d,index)=>{
                     if(index<e.length-1){
                         return '0'
                     }else{
                         return 1;
                     }
                 }).reduce((c,x)=>c+x,"");
             }else{
                 return e;
             }
         }).reduce((a,v)=>(a!+v),"");

        return nextV;

    }

    return(
        <>

            <WrapperPatternd>
                {
                    showinfo?(
                        <>
                            <div className={"infopat"}>
                                <p className={"title"}>Pattern for identity</p>
                                <p>{'Ex: id-{@@@@@}-{dd-mm-yyyy}'}</p>
                                <p>{"{@@@@@} -> digits from 0-9"}</p>
                                <p>{"{#####} -> letters A-Z"}</p>
                                <p>{"{$$$$$} -> hexa"}</p>
                                <p>{"{dd-mm-yyyy}-> current date format"}</p>
                                <p>{"Min or Max bound - Ex: 000001-999999"}</p>
                            </div>
                        </>
                    ):""
                }
                <div className={"divd"} >
                    <label>Patter ID</label>
                    <input className={"desc"} type={"text"} value={pattern} onChange={event=>SetPattern(event.target.value)} onMouseOver={(e)=>{
                            showInfo();
                    }} onClick={()=>{
                        setShowinfo(false);
                    }} />
                    <label>Lower bound</label>
                    <input className={"lowb"} type={"text"}/>
                    <label>Max bound</label>
                    <input className={"maxb"} type={"text"}/>
                    <label>Next Value</label>
                    <input className={'nextID'} value={nextV} type={'text'}/>

                    <Button className={"bbtn"} label="Submit"/>
                </div>
            </WrapperPatternd>

        </>

    )

}

export default Index;