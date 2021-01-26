import React from 'react';
import App from '../App';
import Img from '../assets/fondo-pokedex2.jpg';
import '../styles/Pokedex.css';

class Pokedex extends React.Component {
  render() {
    return(
      <div className="pokedex">
        <img className="pokedex__img" src={Img} alt="hola"/>
        <App />
      </div>
    )
  }
}

export default Pokedex;