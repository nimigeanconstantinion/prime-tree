import {  Dropdown,Menu} from 'antd'
import index from "../CardProdus";


function Menux(){

    const Item = Menu.Item
    const value:number=15;
    const menu = (value:number) =>
        <Menu>

            <Item>Like it</Item>
            <Item>Bookmark</Item>
        </Menu>
    return(
        <>
            <Dropdown overlay={menu(value)} trigger={[`contextMenu`]}>
                <div onContextMenu={e=>{
                    console.log("CLICK");
                }}>{value}</div>
            </Dropdown>

        </>
    );
}

export default Menux;