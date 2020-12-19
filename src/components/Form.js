import React, {Fragment} from 'react';

function Form (props) {
  return(
    <Fragment>
      <form onSubmit={props.search}>
          <input type="text" onChange={props.handleChange}/>
          <input type="submit" value="Obtener imágenes"/>
        </form>
    </Fragment>
  )
}
export default Form;