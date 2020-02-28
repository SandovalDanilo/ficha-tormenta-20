import React from 'react';
import Select from './Select';
import { Armaduras, Escudos } from './Armaduras';
import './stylesheets/DefesaArmadura.css';

class DefesaArmadura extends React.Component {
  calculaTotalDefesa = (des_mod, armadura, escudo, outros) => {
    return [10, des_mod, armadura, escudo, outros].reduce((sum, x) => sum + x);
  }

  updateDefesa = (e) => {
    let defesa = {...this.props.defesa}

    defesa["outros"] = parseInt(e.target.value);

    this.props.updateState({
      defesa: defesa
    })
  }

  selectArmadura = (armadura) => {
    let defesa = {
      ...this.props.defesa,
      armadura: armadura,
    }
    
    this.props.updateState({
      defesa: defesa
    })
  }

  selectEscudo = (escudo) => {
    let defesa = {
      ...this.props.defesa,
      escudo: escudo,
    }
    
    this.props.updateState({
      defesa: defesa
    })
  }

  updateArmadura = (e) => {
    let defesa = {...this.props.defesa};
    const [index, campo] = e.target.id.split("-");

    let newValue = e.target.value;    
    if(campo === "defesa" || campo === "penalidade") {
      newValue = parseInt(newValue);
    }

    defesa[index][campo] = newValue;

    this.props.updateState({
      defesa: defesa
    })
  }

  renderDefesa = (defesa) => {
    const totalDefesa = this.calculaTotalDefesa(
      this.props.des_mod, 
      defesa.armadura.defesa, 
      defesa.escudo.defesa, 
      defesa.outros
    );

    return (
      <table className="Defesa">
        <thead>
          <tr>
            <th className="defesa bold-label">Defesa</th>
            <th className="simbolo"></th>
            <th className="base"></th>
            <th className="simbolo"></th>
            <th className="destreza">Mod. de<br />Destreza</th>
            <th className="simbolo"></th>
            <th className="armadura">Bônus de<br/>Armadura</th>
            <th className="simbolo"></th>
            <th className="escudo">Bônus de<br/>Escudo</th>
            <th className="simbolo"></th>
            <th className="outros">Outros</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="defesa">
              <input className="defesa" 
                     readOnly={true}
                     value={totalDefesa} />
            </td>
            <td className="simbolo">=</td>
            <td className="base">
              <strong>10</strong>
            </td>
            <td className="simbolo">+</td>
            <td className="destreza">
              <input className="" 
                     readOnly={true}
                     value={this.props.des_mod} />
            </td>
            <td className="simbolo">+</td>
            <td className="armadura">
              <input className="" 
                     readOnly={true}
                     value={defesa.armadura.defesa} />
            </td>
            <td className="simbolo">+</td>
            <td className="escudo">
              <input className="" 
                     readOnly={true}
                     value={defesa.escudo.defesa} />
            </td>
            <td className="simbolo">+</td>
            <td className="outros">
              <input className="" 
                     defaultValue={defesa.outros}
                     onBlur={this.updateDefesa} />
            </td>
          </tr>
        </tbody>
      </table>
    )
  }

  renderArmadura = (defesa) => {
    return (
      <table className="Armadura">
        <thead>
          <tr>
            <th className="armadura-escudo bold-label">
              Armadura & Escudo
            </th>
            <th className="defesa">Defesa</th>
            <th className="penalidade">Penalidade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="armadura-escudo">
              <Select value={defesa.armadura}
                      options={Armaduras}
                      onChange={this.selectArmadura} />
            </td>
            <td className="defesa">
              <input id="armadura-defesa"
                     value={defesa.armadura.defesa}
                     onChange={this.updateArmadura} />
            </td>
            <td className="penalidade">
              <input id="armadura-penalidade"
                     value={defesa.armadura.penalidade}
                     onChange={this.updateArmadura} />
            </td>
          </tr>
          <tr>
            <td className="armadura-escudo">
              <Select value={defesa.escudo}
                      options={Escudos}
                      onChange={this.selectEscudo} />
            </td>
            <td className="defesa">
              <input id="escudo-defesa"
                     value={defesa.escudo.defesa}
                     onChange={this.updateArmadura} />
            </td>
            <td className="penalidade">
              <input id="escudo-penalidade"
                     value={defesa.escudo.penalidade}
                     onChange={this.updateArmadura} />
            </td>
          </tr>
        </tbody>
      </table>
    )
  }

  render() {
    return (
      <div className="DefesaArmadura">
        {this.renderDefesa(this.props.defesa)}
        {this.renderArmadura(this.props.defesa)}
      </div>
    )
  }
}

export default DefesaArmadura;