import React from 'react';

const Form = props => (
    <form onSubmit={props.getRecipes} style={{ marginBottom:"2rem" }} className="form-inline d-flex justify-content-center sticky-top">
      <div className="form-group">
        <input className="form-control" type="text" name="recipeName" />
        <button type="submit" className="btn btn-primary ml-2">Search</button>
      </div>
    </form>
  );
  
  export default Form;