import React from "react";
import SearchBar from "./searchbar.component";
import AlumnoDataService from "../services/alumno.service";

class Buscador extends React.Component {
    state = { alumnos: []};

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
      }

    renderAlumnos(alumnos) {
        return alumnos.map((alumno) => {
            return (
            <a
                href={`./alumnos/${alumno.id}`}
                key={alumno.id}
                class="list-group-item list-group-item-action"
                aria-current="true"
            >
                {`${alumno.id} ${alumno.nombre} ${alumno.apellidos}`}
            </a>
            );
        });
    }      

    render() {
        return (
            <div>
            <SearchBar onSubmit={this.search}/>
            <div class="list-group">{this.renderAlumnos(this.state.alumnos)}</div>
            </div>
        );
    }
}


export default Buscador;
  