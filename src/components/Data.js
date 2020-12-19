import React, {Fragment} from 'react'

function Data (props) {
  // if(props.list !== undefined){
  //   return (
  //     <div>
  //       <p>Tipo</p>
  //       <ul>{props.list}</ul>
  //     </div>
  //   )
  // }
  return(
    <Fragment>
      {
        props.id && <p>Número de pokémon: {props.id}</p>
      }
      
      <img src={props.image} alt=""/>
      <ul>{props.list}</ul>
    </Fragment>
  )
}

export default Data;