import Filho from "./Filho";

export default function Pai(props){
    return(
        <div>
            <Filho nome="Rafael" familia={props.familia}/>
            <Filho nome="Arlene" familia={props.familia}/>
            <Filho {...props} nome="Beto" />
        </div>
    ) 
}