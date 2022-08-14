
import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Porshe" ano_lancamento={1917}/>
                <Item marca="Fiat" ano_lancamento={2035}/>
            </ul>
        </>
    )
}



export default List