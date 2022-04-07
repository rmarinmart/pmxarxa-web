import React from "react";
import SearchBar from "./searchbar.component";
import ListaAlumnos from "./listaalumnos.component";
import AlumnoDataService from "../services/alumno.service";
import Toast from "./toast.component";
import { Toast as BootstrapToast } from "../../node_modules/bootstrap/dist/js/bootstrap.esm";

class Buscador extends React.Component {
  constructor(props) {
    super(props);
    this.state = { alumnos: [], message: "" };
    this.searchToast = React.createRef();  
  }

  search = (searchTerm) => {
    AlumnoDataService.search(searchTerm)
      .then((response) => {
        this.setState({
          alumnos: response.data,
        });
      })
      .catch((e) => {
        console.log(e.message, this.searchToast);
        this.setState({message: "Error realizando la búsqueda: " + e.message})
        new BootstrapToast(this.searchToast.current.toastRef.current).show();
      });
  };

  render() {
    return (
      <div>
        <SearchBar
          onSubmit={this.search}
          placeholder="Escribe el id, nombre o apellidos del alumno"
        />
        <Toast
          ref={this.searchToast}
          message={this.state.message}
        />        
        <ListaAlumnos alumnos={this.state.alumnos} />
      </div>
    );
  }
}

export default Buscador;
