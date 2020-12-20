import React, {Fragment} from 'react'

function Data (props) {
  
  const listType = props.types.map((type) => {
    return <li key={type.slot}>{type.type.name}</li>
  })

  return(
    <Fragment>
      {
        props.id && <p>Número de pokémon: {props.id}</p>
      }
      
      <img src={props.image} alt=""/>
      <ul>{listType}</ul>
    </Fragment>
  )
}

export default Data;