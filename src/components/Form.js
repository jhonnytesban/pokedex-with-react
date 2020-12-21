import React, {Fragment} from 'react';
import '../styles/Form.css'

function Form (props) {
  return(
    <Fragment>
      <form onSubmit={props.search} className="form">
          <input placeholder="Introduce un nombre" type="text" onChange={props.handleChange}/>
          <input type="submit" value="Search"/>
        </form>
    </Fragment>
  )
}
export default Form;