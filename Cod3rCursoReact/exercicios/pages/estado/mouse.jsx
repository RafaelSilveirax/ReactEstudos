import { useState } from "react"

export default function mouse(){
   /*  const array = useState(0)
    const x = array[0]
    const setx = array[1] */

    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    const estilo = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor:"#222",
        height: "100vh"
    }

    function quandoMover(ev){
        /* console.log(ev.clientX, ev.clientY) */
        setMouseX(ev.clientX);
        setMouseY(ev.clientY);
    }


    return(
        <div style={estilo} onMouseMove={quandoMover}>
          <span>Eixo X: {mouseX}</span>
          <span>Eixo Y: {mouseY}</span>
        </div>
    )
}