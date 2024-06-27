import React from "react";
import ListGroup from "./listGroup.component";

const asignaturas1ESO = [
  "Valenciano",
  "Castellano",
  "Inglés",
  "Música",
  "Geografía e Historia",
];
const asignaturas2ESO = [
  "Valenciano",
  "Castellano",
  "Inglés",
  "Física y Química",
  "Música",
  "Geografía e Historia",
];
const asignaturas3ESO = [
  "Valenciano",
  "Castellano",
  "Inglés",
  "Biología y Geología",
  "Geography",
  "Física y Química",
  "Música",
];
const asignaturas4ESO = [
  "Castellano",
  "Valenciano",
  "Inglés",
  "Geografía e Historia",
  "Educación en valores",
];
const asignaturas1FPB = ["Ciencias aplicadas I"];
const asignaturas2FPB = ["Ciencias aplicadas II"];
const asignaturas2PMAR = [
  "Teamwork 2 inglés",
  "Música",
];
const asignaturas3PMAR = [
  "Valenciano",
  "Castellano",
  "Geografía",
  "Ámbito científico",
  "Teamwork 3",
  "Música",
];
const asignaturas4PMAR = [
  "Ciencias sociales",
  "Castellano",
  "Ambito tecnológico",
  "Teamwork 4",
  "Valenciano",
];
const opts1ESO = [];
const opts2ESO = [];
const opts3ESO = [];
const opts4ESO = [];
const opts1FPB = [];
const opts2FPB = [];
const opts2PMAR = [];
const opts3PMAR = [];
const opts4PMAR = [];

const asignaturas1BACH = ["Castellano", "Filosofía", "Valencià", "Inglés"];
const asignaturas2BACH = ["Inglés", "Historia de España"];
const opts1BACH = [
  "Dibujo Técnico I",
  "Historia del mundo",
  "Griego",
  "Latín",
  "Matemáticas CCSS",
  "Biología y geología",
  "Tecnología I",
  "Francés",
];
const opts2BACH = [
  "Francés",
  "Matemáticas de ciencias",
  "Matemáticas de CCSS",
  "BIOLOGÍA",
  "GEOLOGÍA",
  "FÍSICA",
  "PSICOLOGÍA",
  "GEOGRAFÍA DE ESPAÑA",
  "Dibujo técnico II",
  "Griego II",
  "Latin II",
  "Historia del arte",
];

const asignaturas = [
  asignaturas1ESO,
  asignaturas2ESO,
  asignaturas3ESO,
  asignaturas4ESO,
  asignaturas1FPB,
  asignaturas2FPB,
  asignaturas1BACH,
  asignaturas2BACH,
  asignaturas1ESO,
  asignaturas2PMAR,
  asignaturas3PMAR,
  asignaturas4PMAR,
  asignaturas1FPB,
  asignaturas2FPB,
  asignaturas1BACH,
  asignaturas2BACH,
];
const optativas = [
  opts1ESO,
  opts2ESO,
  opts3ESO,
  opts4ESO,
  opts1FPB,
  opts2FPB,
  opts1BACH,
  opts2BACH,
  opts1ESO,
  opts2PMAR,
  opts3PMAR,
  opts4PMAR,
  opts1FPB,
  opts2FPB,
  opts1BACH,
  opts2BACH,
];
const problemasTipicos = [
  "Bordes estropeados",
  "Escrito a lápiz",
  "Escrito a bolígrafo",
  "Subrayado con marcador",
  "Tapas muy estropeadas",
];

class AsistenteEntrega extends React.Component {
  constructor(props) {
    super(props);
    const curso = this.props.curso;
    this.state = {
      pmar: false,
      curso: curso,
      asignaturaSeleccionada: 0,
      problemaSeleccionado: 0,
    };
    this.closeButton = React.createRef();
    this.problemasConfig = [];
    this.problemasConfig.push(["Nuevo", "list-group-item-success"]);
    this.problemasConfig.push(["En buen estado", "list-group-item-success"]);
    this.problemasConfig.push([
      "Sin-existencias (PENDIENTE DE ENTREGA)",
      "list-group-item-warning",
    ]);
    this.problemasConfig.push(
      ...problemasTipicos.map((problema) => [
        problema,
        "list-group-item-danger",
      ])
    );
  }

  prepararConfiguracion = () => {
    this.asignaturasConfig = asignaturas[this.state.curso].map((asignatura) => [
      asignatura,
      "list-group-item-primary",
    ]);
    this.asignaturasConfig.push(
      ...optativas[this.state.curso].map((opt) => [opt, "list-group-item-info"])
    );
  };

  onPMARSwitch = () => {
    const curso = this.state.pmar ? this.props.curso : this.props.curso + 8;
    this.setState({ pmar: !this.state.pmar, curso: curso });
  };

  onSelectAsignatura = (index) => {
    this.setState({ asignaturaSeleccionada: index });
  };

  onSelectProblema = (index) => {
    this.setState({ problemaSeleccionado: index });
  };

  onAddComment = () => {
    this.props.onAddComment(
      `- ${this.asignaturasConfig[this.state.asignaturaSeleccionada][0]} ${this.problemasConfig[this.state.problemaSeleccionado][0]
      }`
    );
  };

  onNewSet = () => {
    let msg = "Lote completamente nuevo:";
    this.asignaturasConfig.forEach((asignatura) => {
      msg += "\n\t-" + asignatura[0];
    });
    this.props.onAddComment(msg);
  };

  render() {
    this.prepararConfiguracion();
    return (
      <div>
        <input
          className="btn btn-primary"
          type="button"
          value="Asistente de entrega"
          data-bs-toggle="modal"
          data-bs-target="#asistenteEnt"
        />
        <div
          className="modal fade"
          id="asistenteEnt"
          tabIndex="-1"
          aria-labelledby="asistenteEntLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="asistenteEntLabel">
                  Asistente de entrega
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="form-check form-switch">
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                  >
                    Curso PMAR
                  </label>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    checked={this.state.pmar}
                    onChange={this.onPMARSwitch}
                  />
                </div>
                <div className="row">
                  <div className="col">
                    <ListGroup
                      items={this.asignaturasConfig}
                      onSelectItem={this.onSelectAsignatura}
                      selectedItem={this.state.asignaturaSeleccionada}
                    />
                  </div>
                  <div className="col">
                    <ul className="list-group">
                      <ListGroup
                        items={this.problemasConfig}
                        onSelectItem={this.onSelectProblema}
                        selectedItem={this.state.problemaSeleccionado}
                      />
                    </ul>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={this.onNewSet}
                >
                  Lote nuevo
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.onAddComment}
                >
                  Añadir comentario
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  ref={this.closeButton}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AsistenteEntrega;
