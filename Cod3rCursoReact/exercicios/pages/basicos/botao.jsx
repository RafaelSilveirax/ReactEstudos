function acao1(){
    console.log("acao1")
}

export default function botao(){
    function acao2(){
        console.log("acao2")
    }

    function acao5(e){
        console.log(e)
    }
    return(
        <div>
           <input type="text" onChange={e => console.log(e.target.value)} />
           <button onClick={acao1}>Click</button>
           <button onClick={acao2}>Click</button>   
           <button onClick={function(){
                console.log("acao3")
           }}>Click</button>    
           <button onClick={() => {
            console.log("acao4")
           }}>Click</button>     
           <button onClick={acao5}>Evento</button> 
        </div>
    )
}