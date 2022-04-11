import React from "react";
import Emoji from "./emoji.component";
import EmojiSpinner from "./emojiSpinner.component";

class CabeceraAlumno extends React.Component {
  render() {
    if (this.props.editName)
      return (
        <form className="input-group" onSubmit={this.props.onSaveName}>
          <input
            type="text"
            aria-label="First name"
            className="form-control"
            placeholder="Nombre"
            value={this.props.currentAlumno.nombre}
            onChange={this.props.onEditName}
          />
          <input
            type="text"
            aria-label="Last name"
            className="form-control"
            placeholder="Apellidos"
            value={this.props.currentAlumno.apellidos}
            onChange={this.props.onEditSurname}
          />
          <button className="btn btn-lg btn-light" type="submit">
            Guardar nombre
            <Emoji symbol="✏️" />
          </button>
          <EmojiSpinner activeSpinner={this.props.activeSpinner} symbol="🟡" />
        </form>
      );
    return (
      <h1>
        {`${this.props.currentAlumno.id} - ${this.props.currentAlumno.nombre} ${this.props.currentAlumno.apellidos}`}
        <button
          className="btn btn-lg btn-light"
          onClick={this.props.onStartEdit}
        >
          Editar nombre
          <Emoji symbol="✏️" />
        </button>
        <EmojiSpinner activeSpinner={this.props.activeSpinner} symbol="🟢" />
      </h1>
    );
  }
}

export default CabeceraAlumno;
