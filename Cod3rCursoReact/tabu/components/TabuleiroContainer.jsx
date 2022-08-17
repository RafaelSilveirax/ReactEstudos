
import Mesa from "./mesa"
import styles from "./TabuleiroContainer.module.css" 

export default function TabuleiroContainer(){
    return(
        <div className={styles.conteiner_tabu}>
            <Mesa/>
        </div>
    )
}