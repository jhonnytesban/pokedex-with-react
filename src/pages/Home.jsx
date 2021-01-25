import React, {Fragment} from 'react';
import '../styles/Home.css';
import Img from '../assets/fondo-pokeball.png'
import {Link} from 'react-router-dom';

const Home = () => {
  return(
    <Fragment>
      <div className="home">
        <img src={Img} alt="" className="home__img"/>
        <div className="container">
          <button className="home__button"><Link className="button__link" to="/pokedex">Entrar</Link></button>
        </div>
      </div>
    </Fragment>
  )
}

export default Home;