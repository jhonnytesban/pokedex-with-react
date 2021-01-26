import React, {Fragment} from 'react';
import '../styles/Form.css';

function Form (props) {
  return(
    <Fragment>
      <form onSubmit={props.search} className="form">
          <input className="input__text" placeholder="Introduce un nombre" type="text" onChange={props.handleChange}/>
          <input className="input__submit" type="submit" value="BUSCAR"/>
        </form>
    </Fragment>
  )
}
export default Form;