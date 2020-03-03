import React from 'react';
import './stylesheets/Equipamento.css';

class Equipamento extends React.Component {
  render() {
    return (
      <div className="Equipamento">
        <div className="bold-label title">
          Equipamento
        </div>
        <textarea id="equipamento"
                  value={this.props.equipamento}
                  onChange={this.props.handleChange} />
        <div className="dinheiro">
          <label>T$:</label>
          <input id="tibar"
                 value={this.props.tibar}
                 type="number"
                 onChange={this.props.handleChange} />
          <label>TO:</label>
          <input id="tibar_ouro"
                 value={this.props.tibar_ouro}
                 type="number"
                 onChange={this.props.handleChange} />
        </div>
      </div>
    )
  }
}

export default Equipamento;