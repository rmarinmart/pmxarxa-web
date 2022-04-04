import React, { Component } from "react";
import { connect } from "react-redux";
import { createAlumno } from "../actions/alumnos";

class Creador extends Component {
  constructor(props) {
    super(props);
    this.onChangeNombre = this.onChangeNombre.bind(this);
    this.onChangeApellidos = this.onChangeApellidos.bind(this);
    this.saveAlumno = this.saveAlumno.bind(this);
    this.newAlumno = this.newAlumno.bind(this);
    this.state = {
      id: null,
      nombre: "",
      apellidos: "",
      submitted: false,
    };
  }
  onChangeNombre(e) {
    this.setState({
      nombre: e.target.value,
    });
  }
  onChangeApellidos(e) {
    this.setState({
      apellidos: e.target.value,
    });
  }
  saveAlumno(e) {
    e.preventDefault();
    const { nombre, apellidos } = this.state;
    this.props
      .createAlumno(nombre, apellidos)
      .then((data) => {
        this.setState({
          id: data.id,
          nombre: data.nombre,
          apellidos: data.apellidos,
          submitted: true,
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newAlumno() {
    this.setState({
      id: null,
      nombre: "",
      apellidos: "",
      submitted: false,
    });
  }
  render() {
    return (
      <div>
        {this.state.submitted ? (
          <form onSubit={this.newAlumno}>
            <div className="mb-3">
              <h3>El alumno se ha creado satisfactoriamente.</h3>
              <a
                href={`./alumnos/${this.state.id}`}
                key={this.state.id}
                className="list-group-item list-group-item-action"
                aria-current="true"
              >
                {`${this.state.id} ${this.state.nombre} ${this.state.apellidos}`}
              </a>
            </div>
            <button type="submit" className="btn btn-success">
              Añadir otro alumno
            </button>
          </form>
        ) : (
          <form onSubmit={this.saveAlumno}>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                required
                value={this.state.nombre}
                onChange={this.onChangeNombre}
                name="nombre"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="apellidos" className="form-label">
                Apellidos
              </label>
              <input
                type="text"
                className="form-control"
                id="apellidos"
                required
                value={this.state.apellidos}
                onChange={this.onChangeApellidos}
                name="apellidos"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Añadir
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default connect(null, { createAlumno })(Creador);
