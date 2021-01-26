import React, {Fragment} from 'react';
import Form from './components/Form';
import Data from './components/Data';
import './styles/App.css';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';



// function Prueba(props) {
//   if (props.error) {
//     return <p>No has introducido nngún nombre</p>
//   }
//   return null
// }


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: '',
      id: undefined,
      types: [],
      error: true
    }
  }

  search = (event) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`)
    .then(res => res.json())
    .then(data => 
      // console.log(data))
      this.setState({
      image: data.sprites.front_default,
      id: data.id,
      types: data.types,
      error: false
    }))
    .catch(err => this.setState({
      error: true
    }))

    event.preventDefault()
  }

  handleChange = (event) => {
    setTimeout(() => {
      this.setState({
        name: event.target.value.toLowerCase()
      })
      
    }, 400);

    
  }

  render() {
    return(
      <Fragment>
        <div className="app">
          <header>
            <Form search={this.search} handleChange={this.handleChange}/>
          </header>
          <div className="app-div">
            <section>
              {/* <Prueba error={this.state.error} name={this.state.name}/> */}
              {!this.state.error  &&
                <Data id={this.state.id} image={this.state.image} types={this.state.types}/>
              }
            </section>

          </div>
              <Button><Link to="/" className="app__link">Salir</Link></Button>

        </div>
      </Fragment>
    )
  }
}

export default App;
