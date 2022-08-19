import listaProdutos from "../../data/listaProdutos"

export default function repeticao2(){

    const comBorda ={
        border: "1px solid"
    }

    function renderizarLinha(){
        return listaProdutos.map((produto =>{
            return(
                <tr key={produto.id}>
                    <td style={comBorda}>{produto.id}</td>
                    <td style={comBorda}>{produto.nome}</td>
                    <td style={comBorda}>{produto.preco}</td>
                </tr>
            )
        }))
    }

    return(
        <div>
            <table style={comBorda}>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>nome</th>
                        <th>preço</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizarLinha()}
                </tbody>
            </table>
        </div>
    )
}