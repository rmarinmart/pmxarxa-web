import React, { Component } from "react";
import { connect } from "react-redux";
import {
  retrieveIncidencias,
  deleteIncidencia,
  searchIncidencias,
} from "../actions/incidencias";
import { retrieveAlumnos } from "../actions/alumnos";
import { tabConfig } from "../config";
import Incidencia from "./incidencia.component";
import Toast from "./toast.component";
import { Toast as BootstrapToast } from "../../node_modules/bootstrap/dist/js/bootstrap.esm";

class Incidencias extends Component {
  deletionToast = React.createRef();
  state = { message: "" };

  componentDidMount() {
    if (!this.props.alumnos || this.props.alumnos.length === 0)
      this.props.retrieveAlumnos();
    if (this.props.alumnoId) {
      this.props.searchIncidencias(this.props.alumnoId);
    } else if (!this.props.incidencias || this.props.incidencias.length === 0) {
      this.props.retrieveIncidencias();
    }
  }

  deleteIncidencia = (id) => {
    this.props
      .deleteIncidencia(id)
      .then(() => {
        console.log("Incidencia borrada correctamente");
      })
      .catch((e) => {
        this.setState({ message: "Error borrando incidencia: " + e.message });
        new BootstrapToast(this.deletionToast.current.toastRef.current).show();
      });
  };

  renderIncidencias() {
    if (!this.props.incidencias) return;
    if (!this.props.alumnos) return <div>"Loading..."</div>;
    return this.props.incidencias.map((incidencia) => {
      if (this.props.alumnoId && incidencia.alumnoId !== this.props.alumnoId)
        return "";
      const alumno = this.props.alumnos.find(
        (element) => element.id === incidencia.alumnoId
      );
      if (!alumno) return "";
      return (
        <Incidencia
          alumno={alumno}
          curso={tabConfig[incidencia.curso].tabName}
          incidencia={incidencia}
          key={incidencia.id}
          onDeleteClicked={this.deleteIncidencia}
        />
      );
    });
  }

  buildHeader = () => {
    if (this.props.removeHeader) return "";
    return <h1>Incidencias: {this.props.incidencias.length}</h1>;
  };

  render() {
    return (
      <div>
        {this.buildHeader()}
        <div>{this.renderIncidencias()}</div>
        <Toast ref={this.deletionToast} message={this.state.message} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    incidencias: state.incidencias,
    alumnos: state.alumnos,
  };
};
export default connect(mapStateToProps, {
  retrieveIncidencias,
  searchIncidencias,
  retrieveAlumnos,
  deleteIncidencia,
})(Incidencias);
