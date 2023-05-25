import React, { useRef } from 'react';
import { ContextMenu } from 'primereact/contextmenu';
import {MenuItem, MenuItemCommandEvent} from 'primereact/menuitem';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme

import 'primereact/resources/themes/saga-orange/theme.css';

import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';
import {WrapperNewHome} from "./NewHomeStyle";
// icons

export default function BasicDemo() {
    const cm = useRef<ContextMenu>(null);
    const items: MenuItem[] = [
        { label: 'View', icon: 'pi pi-fw pi-search',command: (event) => handleMenu(event, 'Option 1')
        },
        { label: 'Delete', icon: 'pi pi-fw pi-trash' }
    ];

    let handleMenu=(event:MenuItemCommandEvent,vall:string)=>{
        console.log("Uraaa");
    }
    return (
        <WrapperNewHome>

            <div className="card flex md:justify-content-center">
                <ContextMenu model={items} ref={cm} breakpoint="767px" />
                <img src="https://primefaces.org/cdn/primereact/images/nature/nature3.jpg" alt="Logo" className="max-w-full" onContextMenu={(e) =>  cm.current!.show(e)} />

            </div>
            <p>NU elellflfll</p>

        </WrapperNewHome>

    )
}
