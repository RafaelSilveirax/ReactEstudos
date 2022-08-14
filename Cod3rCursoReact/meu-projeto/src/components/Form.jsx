import {useState} from 'react'

function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`Usuario ${name} foi Cadastrado, senha: ${password} `) 
       
    }
    const[name, setName] = useState()
    const[password, setpassword] = useState()

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" 
                    onChange={((e) => setName(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" name="password" id="password"
                     onChange={((e) => setpassword(e.target.value))} />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
            
        </div>
    )
}

export default Form