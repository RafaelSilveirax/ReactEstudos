function Pessoa(props){
    return(
        <div>
            <img src={props.foto} alt={props.nome} />
            <h2>Nome: {props.nome}</h2>
            <p>idade: {props.idade}</p>
        </div>
    )
}

export default Pessoa