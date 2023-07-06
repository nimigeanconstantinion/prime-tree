import React, {createRef, useEffect, useRef, useState} from "react";


interface CompProps{
    lista:Object[],

    minus:Function
}

interface Camp{
    id:string,
    name:string,
    type:string,
    value:string
}

const CustomFields:React.FC<CompProps>=({lista,minus})=>{
    const arrLength = lista.length;
    const [listaRef,setListaRef]=useState(lista);
    const [fType,setFtype]=useState(1);

    // const refs = useRef<Array<React.Ref<HTMLInputElement>>>([]); // or an {}
    // Make it empty at every render cycle as we will get the full list of it at the end of the render cycle
      //  refs.current = []; // or an {}
      //value={Object.values(f)[3]}
    // since it is an array we need to method to add the refs
    // let addToRefs = (el:React.Ref<HTMLInputElement>) => {
    //     if (el && !refs.current.includes(el)) {
    //         refs.current.push(el);
    //     }
    // };
    const refF = useRef<HTMLDivElement>(null);
   // const [elRefs, setElRefs] = React.useState<>([]);

    React.useEffect(() => {
        // add or remove refs
        console.log("----------------------kkkkkk----------------------------------")

        if(refF.current!=null){
            let chld=refF.current.children;
            let i=0;
            lista.map(f=>{
                (chld[i] as HTMLInputElement).value=Object.values(f)[1];
                i++;
                (chld[i] as HTMLInputElement).value=Object.values(f)[2];
                let xt=Object.values(f)[2].toString();
                i++;
                let xfld=Object.values(f)[3];
                if(xt=="date"){
                    console.log("e de tip data");
                    (chld[i] as HTMLInputElement).type="date";

                    let dt:Date=new Date(xfld);
                    (chld[i] as HTMLInputElement).value=xfld;
                    (chld[i] as HTMLInputElement).className="cell date"


                }else{
                    (chld[i] as HTMLInputElement).value=Object.values(f)[3];
                    (chld[i] as HTMLInputElement).className="cell"

                }


                i++;

            })

            Array.from(refF.current.children).forEach((e,index)=>{
                    console.log(e);
                   // (e as HTMLInputElement).value=;
                })
        }

        console.log("----------------------------uuuuuu----------------------------")
    },[lista]);

    //
    // useEffect(()=>{
    //     lista.map((e,index)=>{
    //         elRefs[index].current.value=lista[3]
    //     })
    //
    // },[lista])

    let ev=(ind:number):any=>{

       minus(ind);

   }

   let chName=(e:any,index:number)=>{
        console.log("Schimb");
        console.log(e.target.value)
        // let lista[index]:Object={
        //     id:0,
        //     name:e.target.value,
        //     type:"string",
        //     value:""
        // }
       let newc=lista[index] as Camp;
        newc.name=e.target.value;
        console.log(lista);



   }

   let chType=(e:any,index:number)=>{
       let newc=lista[index] as Camp;
       newc.type=e.target.value;
       console.log("Schimb campil "+index)
       switch(newc.type){
           case 'date':
               setFtype(3)
               e.target.nextElementSibling.type="date"

               break;
           case 'string':
               setFtype(1)
               e.target.nextElementSibling.type="text"

               break;
           case 'number':
               setFtype(2)
               e.target.nextElementSibling.type="text"

               break;
       }

   }

   let chVal=(e:any,index:number)=>{

       let newc=lista[index] as Camp;
       newc.value=e.target.value

   }
    return(
        <>
            {
                lista.length>0?(
                   <div ref={refF} className={"flds"}>
                       {
                           lista.map((f,index)=>{
                               return(
                                   <>

                                       <input key={index+"-0"} className={"cell"} type={"text"} onClick={(e)=>{
                                           ev(index);
                                       }} onInput={(e)=>{
                                                chName(e,index);
                                       }}/>
                                       <select key={index+"-1"} className={"selopt"} onChange={(e)=>chType(e,index)} onSelect={(e)=>{

                                       }}>
                                           <option>string</option>
                                           <option>number</option>
                                           <option>date</option>
                                       </select>

                                       <input  className={"cell vall"} type={"text"} onChange={(e)=>chVal(e,index)} onClick={e=>{
                                           console.log(e.target)
                                       }}/>





                                   </>


                           )


                           })
                       }
                   </div>

                ):""
            }

        </>
    )
}

export default CustomFields;