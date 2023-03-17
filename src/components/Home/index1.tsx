import {useEffect, useState} from "react";
import NodN from "../model/NodN";
import INode from "../model/INode";
import {Tree, TreeEventNodeEvent, TreeFilterOptions, TreeFilterValueChangeEvent} from "primereact/tree";
import {ListaCafenele} from "../model/ListaCafenele";
import {CafeneaSauLocalitate} from "../model/CafeneaSauLocalitate";
import {WrapperHome} from "./HomeStyle";
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons
import 'primeflex/primeflex.css';

interface Factura{
    id:string,
    client:string,
    valoare:number
}

function Index1(){
   const [nodes,setNodes]=useState<INode<CafeneaSauLocalitate>[]>([]);
   const [selectedKey, setSelectedKey] = useState<string>('');

    let nn:INode<CafeneaSauLocalitate>={
       key: '0',
       label: 'Judete',
       data: null,
       icon: 'pi pi-fw pi-check',
       children:[]
   }

   useEffect(()=>{
       getJudete();
   },[]);

   useEffect(()=>{
       console.log("Cheia este "+selectedKey);
   },[selectedKey]);
    let getJudete = (): void => {
        let listas:INode<CafeneaSauLocalitate>[]=nodes;
        let lista = ListaCafenele.cafenele
            .filter(c => c.idParinte == null)
            .map((node,index) => {
                let n: INode<CafeneaSauLocalitate> = {
                    key:'1-'+node.id.toString(),
                    data: node,
                    label: node.denumire,
                    icon: "pi pi-fw pi-file",
                    children: []

                }
                return n;
            });



//        nodes[0].children=lista;

        let n:INode<CafeneaSauLocalitate>[]=[];
        n.push(nn);
        n[0].children=lista;
        let f:Factura={
            id:"545667",
            client:"CICA MICA",
            valoare:7000
        }
        let mn:INode<Factura>={

            key:'2-'+f.id,
            label:f.id,
            data: f,

            children: []
        }
        lista[0].children.push(mn);
        console.log(lista[0].children);
        console.log(lista);
        setNodes(n);
    }

    let show=(e:TreeEventNodeEvent)=>{
        console.log(e.node.data.id);
       setSelectedKey(e.node.data.client);
        //console.log(selectedKey);
    }
    let testf=(e:TreeFilterOptions)=>{
        console.log(e.filter);
    }

    return(
        <WrapperHome>
            <p>lklkqwlk</p>
            {
                nodes.length>0?(

                    <Tree value={nodes} filter selectionKeys={selectedKey}  selectionMode="single" onSelect={(e)=>{show(e);}} className="w-full md:w-30rem" filterPlaceholder={"Tastati Localitatea sau Cafeneaua"}/>
                ):""
            }
        </WrapperHome>
    );
}

export default Index1;