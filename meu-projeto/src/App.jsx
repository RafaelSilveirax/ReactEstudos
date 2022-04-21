import './App.css';
/* import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List'; */
import Evento from './components/Evento';
import Form from './components/Form';

function App() {

/*   const name = "Rafael";
  const nomeEx = "shalala"

  function sum(a, b){
    return a + b;
  }

  const url = "https://via.placeholder.com/150"; */

  return (
    <div className="App">
      <h1>Olá Mundo React</h1>
      <Evento />
      <Form />

      
    {/*   <p>Primeiro projeto</p>
      <Frase/>
      <p>Olá, {name}</p>
      <p>Soma: {sum(2,2)}</p>
      <img src={url} alt=""></img>
      <HelloWorld />
      <SayMyName nome="XXX" />
      <SayMyName nome={nomeEx} />
      <Pessoa nome="uiui" idade="99" foto={url} />
      <List/>
      <h1>Olá Mundo React</h1>
      <h1>Olá Mundo React</h1>
      <h1>Olá Mundo React</h1> */}
    </div>
  );
}

export default App;
