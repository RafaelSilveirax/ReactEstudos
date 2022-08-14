import Button from "./evento/Button"

function Evento(){

    function meuEvento(){
        alert("primeiro evento")
    }

    function segundoEvento(){
        alert("Segundo evento")
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo evento" />
        </div>
    )
}

export default Evento