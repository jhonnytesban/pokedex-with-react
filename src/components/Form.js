import React, {Fragment} from 'react';

function Form (props) {
  return(
    <Fragment>
      <form onSubmit={props.search}>
          <input placeholder="Introduce un nombre" type="text" onChange={props.handleChange}/>
          <input type="submit" value="Search"/>
        </form>
    </Fragment>
  )
}
export default Form;