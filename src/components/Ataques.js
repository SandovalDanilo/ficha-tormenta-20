import React from 'react';
import { modComSinal } from './Utils'
import './stylesheets/Ataques.css';

import AtaqueSelect from './AtaqueSelect';

class Ataques extends React.Component {
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

  renderAtaque = (i, ataque, atributos, pericias) => {
    // console.log(i);

    return (
      <tr key={i}>
        <td className="nome">
          <AtaqueSelect value={ataque} />
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
          <button>-</button>
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
          this.props.atributos,
          this.props.pericias,
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
                <button>+</button>
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