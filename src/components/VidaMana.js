import React from 'react';
import './stylesheets/VidaMana.css';

class VidaMana extends React.Component {
  render() {
    return (
      <div className="VidaMana">
        <div className="vida">
          <label>Pontos de Vida</label>
          <div className="pontos">
            <div className="maximos">
              <span className="num">{this.props.state.vida_max}</span>
              <span className="label">Máximos</span>
            </div>
            <div className="atuais">
              <span className="num">{this.props.state.vida_atual}</span>
              <span className="label">Atuais</span>
            </div>
          </div>
        </div>
        <div className="mana">
          <label>Pontos de Mana</label>
          <div className="pontos">
            <div className="maximos">
              <span className="num">{this.props.state.mana_max}</span>
              <span className="label">Máximos</span>
            </div>
            <div className="atuais">
              <span className="num">{this.props.state.mana_atual}</span>
              <span className="label">Atuais</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default VidaMana;