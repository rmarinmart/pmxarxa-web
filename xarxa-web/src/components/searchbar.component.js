import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  //Arrow function para que this sea el de la clase. También se puede hacer al definir el callback <form onSubmit={()=>this.onFormSubmit()}>
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
        <form className="row"  onSubmit={this.onFormSubmit}>
            <div className="col-auto">
                <label htmlFor="inputSearch" className="visually-hidden">Búsqueda</label>
                <input type="text" className="form-control" id="inputSearch" placeholder="Escribe el id, nombre o apellidos del alumno" 
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}/>
            </div>
            <div class="col-auto">
                <button type="submit" className="btn btn-primary">Buscar</button>
            </div>
        </form>
    );
  }
}

export default SearchBar;