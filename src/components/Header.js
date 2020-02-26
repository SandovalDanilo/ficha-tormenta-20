import React from 'react';
import './stylesheets/Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div>
          <div className="input-wrapper">
            <input id="nome" value={this.props.state.nome}
                             onChange={(e) => this.props.handleChange(e)} />
            <label htmlFor="nome">Nome do Personagem</label>
          </div>

          <div className="raca-origem">
            <div className="input-wrapper">
              <input id="raca" value={this.props.state.raca}
                             onChange={(e) => this.props.handleChange(e)} />
              <label htmlFor="raca">Raça</label>
            </div>
            <div className="input-wrapper">
              <input id="origem" value={this.props.state.origem}
                                 onChange={(e) => this.props.handleChange(e)} />
              <label htmlFor="origem">Origem</label>
            </div>
          </div>
        </div>

        <div>
          <div className="input-wrapper">
            <input id="jogador" value={this.props.state.jogador}
                                onChange={(e) => this.props.handleChange(e)} />
            <label htmlFor="jogador">Jogador</label>
          </div>
          
          <div className="classe-nivel">
            <div className="input-wrapper classe">
              <input id="classe" value={this.props.state.classe}
                                 onChange={(e) => this.props.handleChange(e)} />
              <label htmlFor="classe">Classe</label>
            </div>

            <div className="input-wrapper">
              <input id="nivel" value={this.props.state.nivel}
                                onChange={(e) => this.props.handleChange(e)} />
              <label htmlFor="nivel">Nível</label>
            </div>
          </div>
        </div>

        <div className="logo">
          <strong>Tormenta 20</strong>
        </div>
      </div>
    )
  }
}

export default Header;