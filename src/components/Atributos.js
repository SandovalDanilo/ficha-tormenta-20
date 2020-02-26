import React from 'react';
import './stylesheets/Atributos.css';

class Atributos extends React.Component {
  calculaMod = (atr) => {
    return Math.floor((atr - 10) / 2)
  }

  modComSinal = (mod) => {
    if (mod > 0) {
      return ("+"+mod);
    } else {
      return mod;
    }
  }

  mudancaAtributos = (e) => {
    let newState = {
      [e.target.id+"_mod"]: this.calculaMod(e.target.value)
    }

    this.props.updateState(newState);
  }

  caixaAtributo = (atr) => {
    return (
      <div key={atr}>
        <div className="box">
          <label htmlFor={atr}>{atr}</label>
          <span>{this.modComSinal(this.props.state[atr+"_mod"])}</span>
        </div>
        <input id={atr}
               value={this.props.state[atr]}
               onBlur={(e) => this.mudancaAtributos(e)}
               onChange={(e) => this.props.handleChange(e)} />
      </div>
    );
  }

  render() {
    const atributos = ["for", "des", "con", "int", "sab", "car"];

    return (
      <div className="Atributos">
        {atributos.map(this.caixaAtributo)}
      </div>
    )
  }
}

export default Atributos;