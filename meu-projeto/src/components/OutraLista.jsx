export function OutraLista({itens}){
    return(
       <>
        <h3>Lista de Coisas:</h3>
        {itens.length > 0 ?(
            itens.map((item, index) =>(
                <p key={index}>{item}</p>
            ))) : (
                <p>Não há itens na lista !</p>
            )
        }

       </>
    )
}