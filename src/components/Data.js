import React, {Fragment} from 'react';
import '../styles/Data.css';

function Data (props) {

  const listType = props.types.map((type) => {
    return <li className="data__li" key={type.slot}>{type.type.name}</li>
  })

  return(
    <Fragment>
      {
        props.id && <p className="data__number">Nº de pokédex: {props.id}</p>
      }
      
      <div className="container-img">
        <img src={props.image} alt="" className="container__img"/>
      </div>
      <ul className="data__ul">Types:{listType}</ul>
    </Fragment>
  )
}

export default Data;