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
      types: []
    }
  }

  search = (event) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.name}`)
    .then(res => res.json())
    .then(data => 
      // console.log(data.types[0].type.name))
      this.setState({
      image: data.sprites.front_default,
      id: data.id,
      types: data.types
    }))

    event.preventDefault()
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    const listType = this.state.types.map((type) => {
      return <li>{type.type.name}</li>
    })
    return(
      <Fragment>
        <h1>Pokédex</h1>
        <Form search={this.search} handleChange={this.handleChange}/>
        <Data id={this.state.id} image={this.state.image} list={listType}/>
      </Fragment>
    )
  }
}

export default App;
