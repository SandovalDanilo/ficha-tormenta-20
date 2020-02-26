import React from 'react';
import './stylesheets/Atributos.css';

class Atributos extends React.Component {
  render() {
    return (
      <div className="Atributos">
        <div className="box">
          <label htmlFor="for">FOR</label>
          <span>{this.props.state.for}</span>
          <input></input>
        </div>
        <div className="box">
          DES
        </div>
        <div className="box">
          CON
        </div>
        <div className="box">
          INT
        </div>
        <div className="box">
          SAB
        </div>
        <div className="box">
          CAR
        </div>
      </div>
    )
  }
}

export default Atributos;