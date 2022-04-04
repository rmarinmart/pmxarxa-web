import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveAlumnos } from "../actions/alumnos";
import ListaAlumnos from "./listaalumnos.component";

class TodaXarxa extends Component {
  componentDidMount() {
    this.props.retrieveAlumnos();
  }
  render() {
    const { alumnos } = this.props;
    return (
      <div>
        <h1>Alumnos: {alumnos.length}</h1>
        <ListaAlumnos alumnos={alumnos} />
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
})(TodaXarxa);
