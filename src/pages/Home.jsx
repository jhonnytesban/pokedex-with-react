import React, {Fragment} from 'react';
import '../styles/Home.css';
import Img from '../assets/fondo-pokeball.png'
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';

const Home = () => {
  return(
    <Fragment>
      <div className="home">
        <img src={Img} alt="" className="home__img"/>
        <div className="container">
          <h1 className="title">Pokédex</h1>
          <Button variant="contained" color="primary"><Link className="button__link" to="/pokedex">Entrar en la pokédex</Link></Button>
        </div>
      </div>
    </Fragment>
  )
}

export default Home;