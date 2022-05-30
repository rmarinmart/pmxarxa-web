import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveIncidencias } from "../actions/incidencias";

class Incidencias extends Component {
  componentDidMount() {
    this.props.retrieveIncidencias();
  }

  renderIncidencias() {
    return this.props.incidencias.map((incidencia) => {
      return (
        <a
          href={`./#/incidencias/${incidencia.id}`}
          key={incidencia.id}
          className="list-group-item list-group-item-action"
          aria-current="true"
        >
          {`${incidencia.id} ${incidencia.descripcion} ${incidencia.curso}  ${incidencia.alumnoId}`}
        </a>
      );
    });
  }

  render() {
    const { incidencias } = this.props;
    return (
      <div>
        <h1>Incidencias: {incidencias.length}</h1>
        <div>{this.renderIncidencias()}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    incidencias: state.incidencias,
  };
};
export default connect(mapStateToProps, {
  retrieveIncidencias,
})(Incidencias);
