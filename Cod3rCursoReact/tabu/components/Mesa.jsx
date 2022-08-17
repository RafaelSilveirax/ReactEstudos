
import styles from "./Mesa.module.css" 
import Quadrado from "./Quadrado"

/* function ExbirMesa(){
    let lista = []
    for(let i = 0; i < 64; i++) {
        if(i%2 == 0){
            lista.push(<Quadrado cor={"#000"}/>)
        }else{
            lista.push(<Quadrado cor={"#fff"}/>)
        }
    }
    return lista
} */

function ExbirMesa(){
    let lista = []
    for(let i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
        if((i+j)%2 == 0){
            lista.push(<Quadrado cor={"#000"}/>)
        }else{
            lista.push(<Quadrado cor={"#fff"}/>)
        }
    }}
    return lista
}

export default function Mesa(){
    return(
        <div className={styles.Mesa}>
            {ExbirMesa()}
        </div>
    )
}