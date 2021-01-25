import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from 'react-router-dom';
import Pokedex from './pages/Pokedex';
import Home from './pages/Home';
import './styles/Index.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/pokedex" component={Pokedex}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
