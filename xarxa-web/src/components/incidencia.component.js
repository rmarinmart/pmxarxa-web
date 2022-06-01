import React from "react";
import { Tooltip } from "../../node_modules/bootstrap/dist/js/bootstrap.esm";

class Incidencia extends React.Component {
  btnRef = React.createRef();
  tooltips = [];

  componentDidMount() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    this.tooltips = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));

  }

  componentWillUnmount() {
    this.tooltips.map(tooltip=>tooltip.dispose());
  }

  onDelete = (e) => {
    if (e.target === this.btnRef.current) {
      e.preventDefault();
      this.props.onDeleteClicked(this.props.incidencia.id);
    }
  };

  render() {
    return (
      <div className="accordion-item">
        <h2
          className="accordion-header"
          id={`header${this.props.incidencia.id}`}
        >
          <div
            className="accordion-button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${this.props.incidencia.id}`}
            aria-expanded="true"
            aria-controls={`#collapse${this.props.incidencia.id}`}
          >
            <div className="row">
              <div className="col-auto">
                <label className="form-label">
                  <a href={`./#/incidencias/${this.props.alumno.id}`} data-bs-toggle="tooltip" title="Generar reporte de incidencia">
                    <b>
                      {`${this.props.alumno.nombre} ${this.props.alumno.apellidos}`}
                    </b>
                  </a>
                </label>
              </div>
              <div className="col-auto">
                <label className="form-label col-auto">{`${this.props.curso}`}</label>
              </div>
              <div className="col-auto">
                <button
                  className="btn btn-primary"
                  onClick={this.onDelete}
                  ref={this.btnRef}
                >
                  Resolver incidencia
                </button>
              </div>
            </div>
          </div>
        </h2>
        <div
          id={`collapse${this.props.incidencia.id}`}
          className="accordion-collapse collapse"
          aria-labelledby={`header${this.props.incidencia.id}`}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <textarea
              className="form-control"
              rows={3}
              defaultValue={this.props.incidencia.descripcion}
              disabled
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Incidencia;
