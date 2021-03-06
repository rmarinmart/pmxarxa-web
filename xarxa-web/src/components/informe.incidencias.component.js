import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveIncidencias } from "../actions/incidencias";
import { retrieveAlumnos } from "../actions/alumnos";
import { tabConfig } from "../config";

class InformeIncidencias extends Component {
  componentDidMount() {
    if (!this.props.alumnos || this.props.alumnos.length === 0)
      this.props.retrieveAlumnos();
    if (!this.props.incidencias || this.props.incidencias.length === 0)
      this.props.retrieveIncidencias();
  }

  renderIncidencias(alumno) {
    return this.props.incidencias.map((incidencia) => {
      if (incidencia.alumnoId !== alumno.id) return "";
      return (
        <li key={incidencia.id} className="list-group-item">
          {tabConfig[incidencia.curso].tabName}:
          <strong> {incidencia.descripcion}</strong>
        </li>
      );
    });
  }

  render() {
    if (!this.props.incidencias || !this.props.alumnos)
      return <div>"Loading..."</div>;
    const alumno = this.props.alumnos.find(
      (element) => element.id === this.props.alumnoId
    );
    if (!alumno) return <div>"Loading..."</div>;
    return (
      <div>
        <p className="h1 text-primary"> Informe de incidencias </p>
        <p className="h3 text-secondary">
          Estudiante: {alumno.nombre} {alumno.apellidos}
        </p>
        <p>
          Las siguientes incidencias han sido detectadas durante la devolución
          del lote asignado. Mientras estas incidencias no sean resueltas,{" "}
          {alumno.nombre} {alumno.apellidos} quedará fuera del programa Xarxa
          llibres, no pudiendo recibr lotes en otros cursos.
        </p>
        <ul className="list-group list-group-flush">
          {this.renderIncidencias(alumno)}
        </ul>
        <p />
        <p />
        <p>
          Petrer,{" "}
          {new Date().toLocaleDateString("es-ES", {
            day: "numeric",
            year: "numeric",
            month: "long",
          })}
        </p>
        <hr />
        <hr />
        <hr />
        <hr />
        <div className="row align-items-start">
          <p className="col align-self-start">Firma del interesado</p>
          <p className="col align-self-end">Firma del responsable Xarxa</p>
        </div>
        <button
          className="btn btn-primary no-print"
          type="button"
          onClick={window.print}
        >
          Imprimir informe
        </button>
        <p />
        <a href={`./#/alumnos/${alumno.id}`} className="no-print">
          Volver a la ficha del alumno
        </a>
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
  retrieveAlumnos,
})(InformeIncidencias);
