import React from "react";
import SearchBar from "./searchbar.component";
import ListaAlumnos from "./listaalumnos.component";
import AlumnoDataService from "../services/alumno.service";

class Buscador extends React.Component {
  state = { alumnos: [] };

  search = (searchTerm) => {
    AlumnoDataService.search(searchTerm)
      .then((response) => {
        this.setState({
          alumnos: response.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    return (
      <div>
        <SearchBar
          onSubmit={this.search}
          placeholder="Escribe el id, nombre o apellidos del alumno"
        />
        <ListaAlumnos alumnos={this.state.alumnos} />
      </div>
    );
  }
}

export default Buscador;
