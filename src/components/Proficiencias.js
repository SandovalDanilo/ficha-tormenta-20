import React from 'react';
import './stylesheets/Proficiencias.css';

class Proficiencias extends React.Component {
  render() {
    return (
      <div className="Proficiencias">
        <div className="bold-label title">
          Proficiências & Outras características
        </div>
        <textarea id="proficiencias"
                  value={this.props.proficiencias}
                  onChange={this.props.handleChange} />
      </div>
    )
  }
}

export default Proficiencias;