import {ProdusDisponibil} from "../model/ListaCafenele";
import {WrapperCard} from "./CardStyle";
import logo from '../images/O3EKFZ1.png';


interface CardProps{
    produs:ProdusDisponibil
}

const index:React.FC<CardProps>=({produs})=>{

    return (
        <WrapperCard>
            <p className={"hiddenid"}>{produs.id}</p>
            <p className={"cardtitle"}>{produs.denumire}</p>
            <p className={"cardpret"}>Pret: {produs.pret} Lei</p>
            <img className={"cardimg"} src={logo} />


        </WrapperCard>
    );
}

export default index;