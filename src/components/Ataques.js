import React from 'react';
import CustomSelect from './CustomSelect';
import { modComSinal } from './Utils';
import { calculaTotal } from './Pericias';
import { Armas } from './Armas'
import './stylesheets/Ataques.css';


class Ataques extends React.Component {
  selectAtaque = (selected, i) => {
    let ataques = {...this.props.ataques};
    let bonus = [];
    let newAtaque = {};

    if(selected.__isNew__) {
      newAtaque = {
        ...ataques[i],
        value: selected["value"],
        label: selected["label"],
        bonus: "",
        dano: "",
        critico: "",
        tipo: "",
        alcance: "",
      } 
    } else {
      newAtaque = {
        ...ataques[i],
        value: selected["value"],
        label: selected["label"],
        dano: selected["dano"],
        critico: selected["critico"],
        tipo: selected["tipo"],
        alcance: selected["alcance"],
      }    

      if (selected["pericias"].indexOf("luta") > -1) {
        bonus.push(calculaTotal(this.props.pericias.luta, this.props.nivel, this.props.atributos));
        newAtaque["dano"] += modComSinal(this.props.atributos.for_mod);
      }
  
      if (selected["pericias"].indexOf("pontaria") > -1) {
        bonus.push(calculaTotal(this.props.pericias.pontaria, this.props.nivel, this.props.atributos));
      }
  
      newAtaque["bonus"] = bonus.map(modComSinal).join("/");
    }

    ataques[i] = newAtaque;
    
    this.props.updateState({
      ataques: ataques
    });
  }
  
  updateAtaque = (e) => {
    let ataques = {...this.props.ataques};
    const [campo, index] = e.target.id.split("-");
    ataques[parseInt(index)][campo] = e.target.value;

    this.props.updateState({
      ataques: ataques
    });
  }

  updateBonusMod = (e) => {
    let ataques = {...this.props.ataques};
    const [, index] = e.target.id.split("-");
    ataques[parseInt(index)]["bonus"] = modComSinal(e.target.value || 0);

    this.props.updateState({
      ataques: ataques
    });
  }

  addAtaque = () => {    
    let ataques = {...this.props.ataques};
    const newAtaque = {
      value: "",
      label: "",
      bonus: "",
      dano: "",
      critico: "",
      tipo: "",
      alcance: "",
    }
    
    ataques[Object.keys(ataques).length] = newAtaque;

    this.props.updateState({
      ataques: ataques
    });
  }

  removeAtaque = (e) => {
    let ataques = {...this.props.ataques};
    let newAtaques = {};
    let cont = 0;
    const [, index] = e.target.id.split("-");

    Object.entries(ataques).forEach((ataque) => {
      let [i, value] = ataque;

      if (i !== index) {
        newAtaques[cont] = value;
        cont += 1;
      }
    });

    this.props.updateState({
      ataques: newAtaques
    });
  }

  renderAtaque = (i, ataque) => {
    return (
      <tr key={i}>
        <td className="nome">
          <CustomSelect value={ataque}
                        options={Armas}
                        onChange={(e) => this.selectAtaque(e, i)} />
        </td>
        <td className="bonus">
          <input id={"bonus-"+i}
                 value={ataque.bonus}
                 onChange={this.updateAtaque}
                 onBlur={this.updateBonusMod} />
        </td>
        <td className="dano">
          <input id={"dano-"+i}
                 value={ataque.dano}
                 onChange={this.updateAtaque} />
        </td>
        <td className="critico">
          <input id={"critico-"+i}
                 value={ataque.critico}
                 onChange={this.updateAtaque} />
        </td>
        <td className="tipo">
          <input id={"tipo-"+i}
                 value={ataque.tipo}
                 onChange={this.updateAtaque} />
        </td>
        <td className="alcance">
          <input id={"alcance-"+i}
                 value={ataque.alcance}
                 onChange={this.updateAtaque} />
        </td>
        <td className="acao">
          <button id={"remove-"+i}
                  onClick={this.removeAtaque}>
            -
          </button>
        </td>
      </tr>
    );
  }

  render() {
    let ataques = [];
    Object.entries(this.props.ataques).forEach((ataque) => {
      ataques.push(
        this.renderAtaque(
          ataque[0],
          ataque[1],
        )
      )
    });

    return (
      <div className="Ataques">
        <table>
          <thead>
            <tr>
              <th className="nome bold-label">Ataques</th>
              <th className="bonus">Bônus<br />de Ataque</th>
              <th className="dano">Dano</th>
              <th className="critico">Crítico</th>
              <th className="tipo">Tipo</th>
              <th className="alcance">Alcance</th>
              <th className="acao">
                <button onClick={this.addAtaque}>+</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {ataques}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Ataques;