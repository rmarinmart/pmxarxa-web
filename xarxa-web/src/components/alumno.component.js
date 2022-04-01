import React, { Component } from "react";
import { connect } from "react-redux";
import AlumnoDataService from "../services/alumno.service";

class Alumno extends Component {
  constructor(props) {
    super(props);
    this.getAlumno = this.getAlumno.bind(this);
    this.state = {
      currentAlumno: {
        id: null,
        nombre: "",
        apellidos: "",
      },
      message: "",
    };
  }
  componentDidMount() {
    console.log(this.props);
    this.getAlumno(this.props.id);
  }

  getAlumno(id) {
    AlumnoDataService.get(id)
      .then((response) => {
        this.setState({
          currentAlumno: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentAlumno } = this.state;
    return (
      <div>
        <h1>{`Id: ${currentAlumno.id} Nombre: ${currentAlumno.nombre} Apellidos: ${currentAlumno.apellidos}`}</h1>
        {currentAlumno.esopres2 ? "true" : "false"}
      </div>
    );
  }
}
export default connect(null, {})(Alumno);
