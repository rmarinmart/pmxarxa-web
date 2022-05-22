import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveIncidencias } from "../actions/incidencias";

class Incidencias extends Component {
  componentDidMount() {
    this.props.retrieveIncidencias();
  }
  render() {
    const { incidencias } = this.props;
    return (
      <div>
        <h1>Incidencias: {incidencias.length}</h1>
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
