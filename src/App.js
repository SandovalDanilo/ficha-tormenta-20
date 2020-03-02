import React from 'react';
import './App.css';

import Header from './components/Header';
import Atributos from './components/Atributos';
import VidaMana from './components/VidaMana';
import Pericias, { ListaPericias } from './components/Pericias';
import Ataques from './components/Ataques';
import DefesaArmadura from './components/DefesaArmadura';
import Proficiencias from './components/Proficiencias';
import Habilidades from './components/Habilidades';
import Equipamento from './components/Equipamento';
import { Classes } from './components/Classes';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "Nome",
      raca: "Raça",
      origem: "Origem",
      jogador: "Jogador",
      classe: Classes[6],
      nivel: 3,
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
      pontos: {
        vida_max: 10,
        vida_atual: 7,
        vida_calculada: true,
        mana_max: 5,
        mana_atual: 4,
        mana_calculada: true,
      },
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
      habilidades: "Ataque Especial\nNvl 3 - Guerreiro",
      magias: "Raio de Fogo\nNvl 1 - Arcanista",
      tibar: 0,
      tibar_ouro: 0,
    }
  }

  onVidaManaChange = (campo, valor) => {
    let newState = {
      atributos: this.state.atributos,
      pontos: this.state.pontos,
    }

    switch (campo) {
      case 'con_mod':
        newState['atributos']['con_mod'] = valor;
        break;
      
      case 'classe':
        newState['pontos']['vida_calculada'] = true;
        newState['pontos']['mana_calculada'] = true;
        
      // eslint-disable-next-line
      default:
        newState[campo] = valor;
        break;
    }

    const classe = newState.classe || this.state.classe;
    const nivel = newState.nivel || this.state.nivel;
    const con_mod = newState.atributos.con_mod;

    if (this.state.pontos.vida_calculada) {
      let vidaMaxima = classe.vida_inicial + con_mod;

      vidaMaxima += ((nivel - 1) * (classe.vida_por_nivel + con_mod));
         
      newState['pontos']['vida_max'] = vidaMaxima;
    }

    if (this.state.pontos.mana_calculada) {
      const manaMaxima = (nivel * classe.mana_por_nivel);
         
      newState['pontos']['mana_max'] = manaMaxima;
    }

    this.updateState(newState);
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
      console.log(JSON.parse(ficha))

      this.setState(JSON.parse(ficha))
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Ficha">
          <Header state={this.state}
                  classe={this.state.classe}
                  nivel={this.state.nivel}
                  onVidaManaChange={this.onVidaManaChange}
                  handleChange={this.handleChange} />
          <div className="core">
            <div className="esq">
              <Atributos atributos={this.state.atributos}
                         onVidaManaChange={this.onVidaManaChange}
                         updateState={this.updateState} />
              <VidaMana pontos={this.state.pontos} />

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

              <Habilidades habilidades={this.state.habilidades}
                           magias={this.state.magias}
                           handleChange={this.handleChange}/>
            </div>
            <div className="dir">
              <Pericias pericias={this.state.pericias}
                        nivel={this.state.nivel}
                        atributos={this.state.atributos}
                        updateState={this.updateState} />

              <Equipamento equipamento={this.state.equipamento}
                           tibar={this.state.tibar}
                           tibar_ouro={this.state.tibar_ouro}
                           handleChange={this.handleChange}/>
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
