import React, {useEffect, useState} from "react";
import {ProdusDisponibil} from "../model/ListaCafenele";
import {TreeN} from "../model/TreeN";

interface NodProps{
    nod:Object
}

const Index:React.FC<NodProps>=({nod})=>{

    const [liskeys,setListKeys]=useState();

    useEffect(()=>{
        let listKeys=Object.keys(nod);
        let values=Object.values(nod);
    },[])

    return(
        <>
            {

            }
        </>
    );

}

export default Index;