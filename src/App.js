import React from 'react';
import './App.css';

import Header from './components/Header';

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
          <header className="App-header">
            <Header state={this.state} handleChange={this.handleChange} />
          </header>
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
