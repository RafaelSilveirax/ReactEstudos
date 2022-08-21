export default function Filho(props){
    console.log(props)
    return(
        <div>
           <button onClick={() => props.funcao()}>sss</button>
           <button onClick={() => props.funcao("Passei no ENEM")}>02dd</button>
        </div>
    )
}