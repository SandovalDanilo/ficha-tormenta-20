import React from 'react';
import CustomSelect from './CustomSelect';
import { Classes } from './Classes';
import './stylesheets/Header.css';

const customSelectStyle = {
  targetHeight: 30,
  control: {
    borderBottom: '2px solid #000',
    fontSize: 18,
  },
}

class Header extends React.Component {
  onClasseChange = (classe) => {
    this.props.onVidaManaChange("classe", classe);
  }

  onNivelChange = (nivel) => {
    this.props.onVidaManaChange("nivel", parseInt(nivel));
  }

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
              <CustomSelect options={Classes}
                            creatable={false}
                            value={this.props.classe}
                            style={customSelectStyle} 
                            onChange={(e) => this.onClasseChange(e)} />
              <label htmlFor="classe">Classe</label>
            </div>

            <div className="input-wrapper nivel">
              <input id="nivel" 
                     type="number"
                     value={this.props.nivel}
                     onChange={(e) => this.onNivelChange(e.target.value)} />
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