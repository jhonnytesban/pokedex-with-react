import React, {Fragment as div} from 'react'
import Form from './components/Form';
import Data from './components/Data';



function Prueba(props) {
  if (props.error) {
    return <p>No has introducido nngún nombre</p>
  }
  return null
}
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
        name: event.target.value
      })
      
    }, 400);

    
  }

  render() {
    return(
      <div className="app">
        <h1 className="title">Pokédex</h1>
        <header>
          <Form search={this.search} handleChange={this.handleChange}/>
        </header>
        <section>
          <Prueba error={this.state.error} name={this.state.name}/>
          {!this.state.error  &&
            <Data id={this.state.id} image={this.state.image} types={this.state.types}/>
          }
        </section>
      </div>
    )
  }
}

export default App;
