import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveAlumnos } from "../actions/alumnos";

class AlumnosList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.retrieveAlumnos();
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
    const { alumnos } = this.props;
    return (
      <div>
        <h1>Alumnos: {alumnos.length}</h1>
        <div class="list-group">{this.renderAlumnos(alumnos)}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    alumnos: state.alumnos,
  };
};
export default connect(mapStateToProps, {
  retrieveAlumnos,
})(AlumnosList);
