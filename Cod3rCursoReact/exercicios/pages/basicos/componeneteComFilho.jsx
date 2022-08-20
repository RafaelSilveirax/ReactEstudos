import Item from "../../components/Item";
import Lista from "../../components/Lista";

export default function componeneteComFilho(props){
    return(
        <div>
            <Lista>
                <Item conteudo="Opa"/>
                <Item conteudo="Epa"/>
                <Item conteudo="XII"/>
            </Lista>
        </div>
    )
}