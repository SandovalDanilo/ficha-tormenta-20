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
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header state={this.state} handleChange={this.handleChange} />
        </header>
      </div>
    )
  }
}

export default App;
