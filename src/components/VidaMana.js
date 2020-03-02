import React from 'react';
import './stylesheets/VidaMana.css';

class VidaMana extends React.Component {
  updatePontos = (e) => {
    let pontos = {...this.props.pontos};
    pontos[e.target.id] = parseInt(e.target.value);

    const [campo, tipo] = e.target.id.split("_")
    if (tipo === 'max') {      
      pontos[campo+"_calculada"] = false;
    }

    this.props.updateState({
      pontos: pontos
    });
  }

  curaDano = (e) => {
    if (e.key === 'Enter') {
      let newPontos = {...this.props.pontos}
            
      newPontos['vida_atual'] += parseInt(e.target.value || 0);
      
      e.target.value = '';
      this.props.updateState({
        pontos: newPontos
      })
    }    
  }

  render() {
    return (
      <div className="VidaMana">
        <div className="vida">
          <label className="bold-label">Pontos de Vida</label>
          <div className="pontos">
            <div className="maximos">
              <input id="vida_max"
                     type="number"
                     min={1}
                     value={this.props.pontos.vida_max}
                     onChange={this.updatePontos} />
              <span className="label">Máximos</span>
            </div>
            <div className="atuais">
              <input id="vida_atual"
                     type="number"
                     min={0}
                     value={this.props.pontos.vida_atual}
                     onChange={this.updatePontos} />
              <span className="label">Atuais</span>
            </div>
            <div className="cura-dano">
              <input id="cura-dano"
                     type="number"
                     onKeyPress={this.curaDano} />
                     <span className="label">Dano/Cura</span>
            </div>
          </div>
        </div>
        <div className="mana">
          <label className="bold-label">Pontos de Mana</label>
          <div className="pontos">
          <div className="maximos">
              <input id="mana_max"
                     type="number"
                     min={0}
                     value={this.props.pontos.mana_max}
                     onChange={this.updatePontos} />
              <span className="label">Máximos</span>
            </div>
            <div className="atuais">
              <input id="mana_atual"
                     type="number"
                     min={0}
                     value={this.props.pontos.mana_atual}
                     onChange={this.updatePontos} />
              <span className="label">Atuais</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default VidaMana;