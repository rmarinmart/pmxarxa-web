import React from "react";
import { connect } from "react-redux";
import { createIncidencia } from "../actions/incidencias";
import { tabConfig } from "../config";
import Toast from "./toast.component";
import { Toast as BootstrapToast } from "../../node_modules/bootstrap/dist/js/bootstrap.esm";

class IncidenciaModal extends React.Component {
  constructor(props) {
    super(props);
    this.saveIncidencia = this.saveIncidencia.bind(this);
    this.state = {
      alumnoId: props.alumno.id,
      descripcion: "",
      curso: props.cursoIndex,
      message: "",
    };
    this.creationToast = React.createRef();
    this.closeButton = React.createRef();
  }

  saveIncidencia(e) {
    e.preventDefault();
    const { alumnoId, descripcion, curso } = this.state;
    this.props
      .createIncidencia(alumnoId, descripcion, curso)
      .then(() => {
        this.setState({ descripcion: "" });
        this.props.onIncidenciaCreada(true);
        this.closeButton.current.click();
      })
      .catch((e) => {
        this.setState({ message: "Error creando incidencia: " + e.message });
        new BootstrapToast(this.creationToast.current.toastRef.current).show();
      });
  }

  render() {
    return (
      <div>
        <input
          className="btn btn-primary"
          type="button"
          value="Crear Incidencia"
          data-bs-toggle="modal"
          data-bs-target="#incidenciaModal"
        />
        <div
          className="modal fade"
          id="incidenciaModal"
          tabIndex="-1"
          aria-labelledby="incidenciaModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="incidenciaModalLabel">
                  Crear incidencia para {this.props.alumno.nombre}{" "}
                  {this.props.alumno.apellidos}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <h6
                    htmlFor="descIncidenciaControlInput"
                    className="form-label"
                  >
                    Curso: {tabConfig[this.props.cursoIndex].tabName}
                  </h6>
                  <h6>
                    Al crear una incidencia se marcará la devolución como
                    realizada, pero el alumno no podrá recibir un lote mientras
                    tenga incidencias pendientes de resolución.
                  </h6>
                  <textarea
                    className="form-control"
                    id="descIncidenciaControlInput"
                    placeholder="Describe la incidencia aquí"
                    rows="3"
                    value={this.state.descripcion}
                    onChange={(e) =>
                      this.setState({ descripcion: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  ref={this.closeButton}
                >
                  Cerrar sin crear
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={(e) => this.saveIncidencia(e)}
                >
                  Guardar incidencia
                </button>
              </div>
            </div>
          </div>
        </div>
        <Toast ref={this.creationToast} message={this.state.message} />
      </div>
    );
  }
}
export default connect(null, { createIncidencia })(IncidenciaModal);
