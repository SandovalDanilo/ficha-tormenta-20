import React from 'react';
import './App.css';

import Header from './components/Header';
import Atributos from './components/Atributos';
import VidaMana from './components/VidaMana';
import Pericias, { ListaPericias } from './components/Pericias';
import Ataques from './components/Ataques';
import DefesaArmadura from './components/DefesaArmadura';
import Proficiencias from './components/Proficiencias';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "Nome",
      raca: "Raça",
      origem: "Origem",
      jogador: "Jogador",
      classe: "Classe",
      nivel: 1,
      atributos: {
        for: 10,
        for_mod: 0,
        des: 10,
        des_mod: 0,
        con: 10,
        con_mod: 0,
        int: 10,
        int_mod: 0,
        sab: 10,
        sab_mod: 0,
        car: 10,
        car_mod: 0,
      },
      vida_max: 10,
      vida_atual: 7,
      mana_max: 5,
      mana_atual: 4,
      pericias: ListaPericias,
      ataques: [
        {
          value: "adaga",
          label: "Adaga",
          bonus: "+3",
          dano: "1d4",
          critico: "19",
          tipo: "Perfuração",
          alcance: "Curto",
        },
        {
          value: "arco_longo",
          label: "Arco longo",
          bonus: "+3",
          dano: "1d6",
          critico: "x3",
          tipo: "Perfuração",
          alcance: "Médio",
        },
      ],
      defesa: {
        armadura: {
          value: "couro-batido",
          label: "Couro batido",
          defesa: 3,
          penalidade: -1,
        },
        escudo: {
          value: "escudo-leve",
          label: "Escudo leve",
          defesa: 1,
          penalidade: -1,
        },
        outros: 1,
      },
      proficiencias: "Armas marciais\nEscudos",
    }
  }

  handleChange = (e) => {
    let newState = {[e.target.id]: e.target.value} 

    this.setState(newState);
  }

  updateState = (newState) => {
    this.setState(newState);
  }

  saveLocal = () => {
    localStorage.setItem('ficha', JSON.stringify(this.state))

    console.log(JSON.parse(localStorage.ficha))
  }

  loadLocal = () => {
    let ficha = localStorage.ficha;
    if(ficha !== undefined) {
      this.setState(JSON.parse(ficha))
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Ficha">
          <Header state={this.state} handleChange={this.handleChange} />
          <div className="core">
            <div className="esq">
              <Atributos atributos={this.state.atributos}
                         updateState={this.updateState} />
              <VidaMana state={this.state} />

              <Ataques ataques={this.state.ataques}
                       atributos={this.state.atributos}
                       nivel={this.state.nivel}
                       pericias={this.state.pericias}
                       updateState={this.updateState} />

              <div className="core">
                <div className="defesa-armadura">
                  <DefesaArmadura defesa={this.state.defesa}
                                  des_mod={this.state.atributos.des_mod}
                                  updateState={this.updateState} />
                </div>
                <div className="proficiencias">
                  <Proficiencias proficiencias={this.state.proficiencias}
                                 handleChange={this.handleChange}/>
                </div>
              </div>
            </div>
            <div className="dir">
              <Pericias pericias={this.state.pericias}
                        nivel={this.state.nivel}
                        atributos={this.state.atributos}
                        updateState={this.updateState} />
            </div>
          </div>
        </div>

        <div className="actions">
          <button onClick={this.saveLocal}>
            Salvar
          </button>
          <button onClick={this.loadLocal}>
            Carregar
          </button>
        </div>
      </div>
    )
  }
}

export default App;
