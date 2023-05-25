import React, {MouseEventHandler, SyntheticEvent, useRef, useState} from 'react';
import { ContextMenu } from 'primereact/contextmenu';
import {MenuItem, MenuItemCommandEvent} from 'primereact/menuitem';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';// icons

const MyComponent = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ left: 0, top: 0 });
    const rmn=useRef<ContextMenu>(null);

    const showContextMenu = (event:any) => {
        console.log("in show context");
        console.log(event);
        setMenuVisible(false);
        console.log(menuVisible);
            event.preventDefault();
            setMenuPosition({ left: event.clientX, top: event.clientY });
            setMenuVisible(true);
            rmn.current!.show(event)
        }




    const hideContextMenu = () => {
        setMenuVisible(false);
    };

    const handleMenuItemClick = (event:MenuItemCommandEvent, item:string) => {
        console.log('Clicked menu item:', item);
        hideContextMenu();
    };

    const menuItems:MenuItem[]= [
        {
            label: 'Option 1',
            command: (event) => handleMenuItemClick(event, 'Option 1')
        },
        {
            label: 'Option 2',
            command: (event) => handleMenuItemClick(event, 'Option 2')
        },
        {
            label: 'Option 3',
            command: (event) => handleMenuItemClick(event, 'Option 3')
        }
    ];
    // const items: MenuItem[] = [
    //     { label: 'View', icon: 'pi pi-fw pi-search',command:(event)=>handleMenuItemClick(event,"View")},
    //     { label: 'Delete', icon: 'pi pi-fw pi-trash' }
    // ];
    return (
        <div onContextMenu={showContextMenu}>
             <p>oiqwpojpqwkpkqwpdkd</p>

                {menuVisible && (

                    <ContextMenu className={"meniu"} ref={rmn} model={menuItems}  style={menuPosition} />

                )}


            {/*{menuVisible!=false && (*/}
            {/*)}*/}
        </div>
    );
};

export default MyComponent;