import React from 'react';
import { modComSinal } from './Utils'
import './stylesheets/Atributos.css';

class Atributos extends React.Component {
  calculaMod = (atr) => {
    return Math.floor((atr - 10) / 2)
  }

  atualizaAtributos = (e) => {
    let atributos = {...this.props.atributos};
    atributos[e.target.id] = parseInt(e.target.value || 0);

    this.props.updateState({
      atributos: atributos
    });
  }

  atualizaModificadores = (e) => {
    const newMod = this.calculaMod(e.target.value);
    
    if(e.target.id === 'con') {
      this.props.onVidaManaChange('con_mod', newMod)
    } else {
      this.props.updateState({
        atributos: {
          ...this.props.atributos,
          [e.target.id+"_mod"]: newMod
        }
      });
    }    
  }

  caixaAtributo = (atr) => {
    return (
      <div key={atr}>
        <div className="box">
          <label htmlFor={atr} className="bold-label">{atr}</label>
          <span>{modComSinal(this.props.atributos[atr+"_mod"])}</span>
        </div>
        <input id={atr}
               value={this.props.atributos[atr]}
               onBlur={(e) => this.atualizaModificadores(e)}
               onChange={(e) => this.atualizaAtributos(e)} />
      </div>
    );
  }

  render() {
    return (
      <div className="Atributos">
        {ListaAtributos.map(this.caixaAtributo)}
      </div>
    )
  }
}

const ListaAtributos = ["for", "des", "con", "int", "sab", "car"];

export default Atributos;
export { ListaAtributos };