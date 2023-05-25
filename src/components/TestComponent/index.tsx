import React, {useRef} from "react";
import {ContextMenu} from "primereact/contextmenu";
import {MenuItem, MenuItemCommandEvent} from "primereact/menuitem";


import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';
// import 'primereact/resources/themes/saga-orange/theme.css';

import {WrapperComp} from "./CompStyle";


function Index(){
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
        <WrapperComp>
            <link id="theme-link" rel="stylesheet" href="/themes/saga-orange/theme.css"/>

            <div className="card flex md:justify-content-center">
                <ContextMenu model={items} ref={cm} breakpoint="767px" />
                <img src="https://primefaces.org/cdn/primereact/images/nature/nature3.jpg" alt="Logo" className="max-w-full" onContextMenu={(e) =>  cm.current!.show(e)} />

            </div>
            <p>NU elellflfll</p>

        </WrapperComp>

    )
}

export default Index;