import React, {Fragment} from 'react'
import './App.css';
import Form from './components/Form';
import Data from './components/Data';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: '',
      id: undefined,
      types: [],
      error: false
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
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return(
      <Fragment>
        <h1>Pokédex</h1>
        <Form search={this.search} handleChange={this.handleChange}/>
        {this.state.error  && <p>Ese pokémon no existe</p>}
        {!this.state.error  &&
          <Data id={this.state.id} image={this.state.image} types={this.state.types}/>
        }
      </Fragment>
    )
  }
}

export default App;
