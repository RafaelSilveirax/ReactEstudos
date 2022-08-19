export default function repeticao1(){

    const listaAprovados = [
        'Rafaek',
        'Maria',
        'Ana',
        'Eu ae'
    ]

    function redenLista(){
        return listaAprovados.map((nome, i) => 
             <li key={i}>{nome}</li>
        )
    }

    return(
        <ul>
            {redenLista()}
        </ul>
    )
}