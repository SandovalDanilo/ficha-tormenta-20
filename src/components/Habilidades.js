import React from 'react';
import './stylesheets/Habilidades.css';

class Habilidades extends React.Component {
  render() {
    return (
      <div className="Habilidades">
        <div className="bold-label title">
          Habilidades & Magias
        </div>
        <textarea id="habilidades"
                  defaultValue={this.props.habilidades}
                  onBlur={this.props.handleChange} />
      </div>
    )
  }
}

export default Habilidades;