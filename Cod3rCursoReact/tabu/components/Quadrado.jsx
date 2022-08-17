
import styles from "./Quadrado.module.css" 
export default function Quadrado(props){
    return(
        <div className={styles.quadrado} style={{background: props.cor}}>
            
        </div>
    )
}