import React from 'react';
import './stylesheets/Pericias.css';

const bonusTreino = (pericia, nivel) => {
  return (pericia.treino ? (Math.ceil(nivel / 7) * 2) : 0);
}

const metadeNivel = (nivel) => {
  return Math.floor(nivel / 2);
}

const modAtributo = (pericia, atributos) => {
  return atributos[pericia.atributo+"_mod"];
}  

const calculaTotal = (pericia, nivel, atributos) => {
  let bonus = 0;

  bonus += metadeNivel(nivel);
  bonus += modAtributo(pericia, atributos);
  bonus += bonusTreino(pericia, nivel);
  bonus += pericia.outros;

  return bonus;
}

class Pericias extends React.Component {
  atualizaTreino = (e) => {
    let pericias = {...this.props.pericias};
    pericias[e.target.id].treino = e.target.checked;

    this.props.updateState({
      pericias: pericias
    });
  }

  atualizaOutros = (e) => {
    let pericias = {...this.props.pericias};
    pericias[e.target.id].outros = parseInt(e.target.value);

    this.props.updateState({
      pericias: pericias
    });
  }

  renderPericia = (key, pericia, nivel, atributos) => {
    return (
      <tr className="linha" key={key}>
        <td className="treino-check">
          <input type="checkbox"
                 id={key}
                 checked={pericia.treino}
                 onChange={this.atualizaTreino} />
        </td>
        <td className="nome">
          {pericia.nome}
          <span className="atributo">
            &nbsp;({pericia.atributo})
          </span>
        </td>
        <td className="total">
          {calculaTotal(pericia, nivel, atributos)}
        </td>
        <td>=</td>
        <td className="metade-nivel">
          <input className="numero" 
                 readOnly={true}
                 value={metadeNivel(nivel)} />
        </td>
        <td className="mod-atributo">
          <span className="simbolo">+</span>
          <input className="numero" 
                 readOnly={true}
                 value={modAtributo(pericia, atributos)} />
        </td>
        <td className="treino">
          <span className="simbolo">+</span>
          <input className="numero" 
                 readOnly={true}
                 value={bonusTreino(pericia, nivel)} />
        </td>
        <td className="outros">
          <span className="simbolo">+</span>
          <input className="numero" 
                 id={key}
                 onChange={this.atualizaOutros}
                 value={pericia.outros} />
        </td>
      </tr>
    )
  }

  render() {
    let pericias = [];
    Object.entries(this.props.pericias).forEach((pericia) => {
      pericias.push(
        this.renderPericia(
          pericia[0], 
          pericia[1],
          this.props.nivel,
          this.props.atributos,
        )
      )
    });

    return (
      <div className="Pericias">
        <table>
          <thead>
            <tr className="linha header">
              <th className="nome bold-label" colSpan="2">Perícias</th>
              <th className="total bold-label">Total</th>
              <th className="igual"></th>
              <th className="metade-nivel">1/2 Nível</th>
              <th className="mod-atributo">Mod. Atributo</th>
              <th className="treino">Treino</th>
              <th className="outros">Outros</th>
            </tr>
          </thead>
          <tbody>
            {pericias}
          </tbody>
        </table>
      </div>
    )
  }
}

const ListaPericias = {
  acrobacia: {
    nome: "Acrobacia",
    atributo: "des",
    treino: false,
    outros: 0,
  },
  adestramento: {
    nome: "Adestramento",
    atributo: "car",
    treino: false,
    outros: 0,
  },
  atletismo: {
    nome: "Atletismo",
    atributo: "for",
    treino: false,
    outros: 0,
  },
  atuacao: {
    nome: "Atuacao",
    atributo: "car",
    treino: false,
    outros: 0,
  },
  cavalgar: {
    nome: "Cavalgar",
    atributo: "des",
    treino: false,
    outros: 0,
  },
  conhecimento: {
    nome: "Conhecimento",
    atributo: "int",
    treino: false,
    outros: 0,
  },
  cura: {
    nome: "Cura",
    atributo: "sab",
    treino: false,
    outros: 0,
  },
  diplomacia: {
    nome: "Diplomacia",
    atributo: "car",
    treino: false,
    outros: 0,
  },
  enganacao: {
    nome: "Enganacao",
    atributo: "car",
    treino: false,
    outros: 0,
  },
  fortitude: {
    nome: "Fortitude",
    atributo: "des",
    treino: false,
    outros: 0,
  },
  furtividade: {
    nome: "Furtividade",
    atributo: "con",
    treino: false,
    outros: 0,
  },
  guerra: {
    nome: "Guerra",
    atributo: "int",
    treino: false,
    outros: 0,
  },
  iniciativa: {
    nome: "Iniciativa",
    atributo: "des",
    treino: false,
    outros: 0,
  },
  intimidacao: {
    nome: "Intimidacao",
    atributo: "car",
    treino: false,
    outros: 0,
  },
  intuicao: {
    nome: "Intuicao",
    atributo: "sab",
    treino: false,
    outros: 0,
  },
  investigacao: {
    nome: "Investigacao",
    atributo: "int",
    treino: false,
    outros: 0,
  },
  jogatina: {
    nome: "Jogatina",
    atributo: "car",
    treino: false,
    outros: 0,
  },
  ladinagem: {
    nome: "Ladinagem",
    atributo: "des",
    treino: false,
    outros: 0,
  },
  luta: {
    nome: "Luta",
    atributo: "for",
    treino: false,
    outros: 0,
  },
  misticismo: {
    nome: "Misticismo",
    atributo: "int",
    treino: false,
    outros: 0,
  },
  navegacao: {
    nome: "Navegacao",
    atributo: "sab",
    treino: false,
    outros: 0,
  },
  nobreza: {
    nome: "Nobreza",
    atributo: "int",
    treino: false,
    outros: 0,
  },
  percepcao: {
    nome: "Percepcao",
    atributo: "sab",
    treino: false,
    outros: 0,
  },
  pontaria: {
    nome: "Pontaria",
    atributo: "des",
    treino: false,
    outros: 0,
  },
  reflexos: {
    nome: "Reflexos",
    atributo: "des",
    treino: false,
    outros: 0,
  },
  religiao: {
    nome: "Religiao",
    atributo: "sab",
    treino: false,
    outros: 0,
  },
  sobrevivencia: {
    nome: "Sobrevivencia",
    atributo: "sab",
    treino: false,
    outros: 0,
  },
  vontade: {
    nome: "Vontade",
    atributo: "sab",
    treino: false,
    outros: 0,
  },
}

export default Pericias;
export { calculaTotal, ListaPericias };