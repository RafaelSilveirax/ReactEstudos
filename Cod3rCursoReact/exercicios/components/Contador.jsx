import { Component } from "react";

export default class Contador extends Component{

    state = {
        numero: this.props.valorInicial ?? 0,
        passo: this.props.passo ?? 1,
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
        console.log(this.props.passo)
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo 
        })
    }

/*     constructor(props){
        super(props)

        this.inc = this.inc.bind(this)
    } */

    render(){
        return(
            <div>
                <h1>Contador classe</h1>
                <h2>{this.state.numero}</h2>

                <input type="number"
                min={1} max={1000} 
                value={this.state.passo}
                onChange={e => this.setState({passo: +e.target.value}) }/>

                <button onClick={this.dec} >-</button>
                <button onClick={this.inc} >+</button>
            </div>
        )
    }

}