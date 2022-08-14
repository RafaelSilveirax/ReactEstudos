export function Saudacao({nome}){

    function gerarSaudacao(algumNome){
        return `Ola, ${algumNome}, tudo certo ?`
    }

    return(
      <>
        
        {nome ? (
        <p>{gerarSaudacao(nome)}</p>
        ) : (
            <p>Não a nome</p>
        )
        }
      </>
    )
}