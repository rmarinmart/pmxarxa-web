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
      return <p key={alumno.id}>{alumno.nombre + " " + alumno.apellidos}</p>;
    });
  }

  render() {
    const { alumnos } = this.props;
    return (
      <div>
        <h1>Alumnos: {alumnos.length}</h1>
        <div>{this.renderAlumnos(alumnos)}</div>
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
