import React, { Component } from "react";

class ListaAlumnos extends Component {
  renderAlumnos(alumnos) {
    return alumnos.map((alumno) => {
      return (
        <a
          href={`./#/alumnos/${alumno.id}`}
          key={alumno.id}
          className="list-group-item list-group-item-action"
          aria-current="true"
        >
          {`${alumno.id} ${alumno.nombre} ${alumno.apellidos}`}
        </a>
      );
    });
  }

  render() {
    const { alumnos } = this.props;
    return <div className="list-group">{this.renderAlumnos(alumnos)}</div>;
  }
}

export default ListaAlumnos;
