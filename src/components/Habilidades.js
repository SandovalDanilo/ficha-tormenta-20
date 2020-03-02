import React from 'react';
import './stylesheets/Habilidades.css';

class Habilidades extends React.Component {
  render() {
    return (
      <div className="Habilidades">
        <div className="bold-label title">
          Habilidades & Magias
        </div>
        <div className="areas">
          <textarea id="habilidades"
                    value={this.props.habilidades}
                    onChange={this.props.handleChange} />
          <textarea id="magias"
                    value={this.props.magias}
                    onChange={this.props.handleChange} />
        </div>
      </div>
    )
  }
}

export default Habilidades;