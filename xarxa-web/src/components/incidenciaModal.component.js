import React from "react";

class IncidenciaModal extends React.Component {
  render() {
    return (
      <div>
        <input
          class="btn btn-primary"
          type="button"
          value="Crear Incidencia"
          data-bs-toggle="modal"
          data-bs-target="#incidenciaModal"
        />
        <div
          class="modal fade"
          id="incidenciaModal"
          tabindex="-1"
          aria-labelledby="incidenciaModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="incidenciaModalLabel">
                  Crear incidencia para {this.props.alumno.nombre}{" "}
                  {this.props.alumno.apellidos}
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar sin crear
                </button>
                <button type="button" class="btn btn-primary">
                  Guardar incidencia
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IncidenciaModal;
