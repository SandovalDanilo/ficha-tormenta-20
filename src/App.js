import React from 'react';
import './App.css';

import Header from './components/Header';
import Atributos from './components/Atributos';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "Nome",
      raca: "Raça",
      origem: "Origem",
      jogador: "Jogador",
      classe: "Classe",
      nivel: "1",
      for: 10,
      des: 10,
      con: 10,
      int: 10,
      sab: 10,
      car: 10,
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value});
    console.log(JSON.stringify(this.state))
  }

  saveLocal = () => {
    localStorage.setItem('ficha', JSON.stringify(this.state));
  }

  loadLocal = () => {
    let ficha = localStorage.ficha;
    if(ficha !== undefined) {
      this.setState(JSON.parse(ficha));
    }
  }

  render() {
    return (
      <div className="App">
        <div className="Ficha">
          <Header state={this.state} handleChange={this.handleChange} />
          <div className="core">
            <div className="esq">
              <Atributos state={this.state} handleChange={this.handleChange} />
            </div>
            <div className="dir">

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
