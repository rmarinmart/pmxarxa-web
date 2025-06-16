import React from "react";
import ListGroup from "./listGroup.component";

const asignaturas1ESO = [
  "Valenciano",
  "Castellano",
  "Inglés",
  "Biología y Geología",
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
];
const asignaturas4ESO = [
  "Castellano",
  "Valenciano",
  "Inglés",
  "Geografía e Historia",
  "Valores",
];
const asignaturas1FPB = [
  "Taller de llengua",
  "Ciencias aplicadas I",
  "Comunicación y sociedad I",
];
const asignaturas2FPB = [
  "Taller de llengua",
  "Ciencias aplicadas II",
  "Comunicación y sociedad II",
];
const asignaturas2PMAR = [
  "Ámbito sociolingüístico",
  "Ámbito científico",
  "All clear 1 inglés",
  "Música",
];
const asignaturas3PMAR = [
  "Valenciano",
  "Castellano",
  "Geografía",
  "Teamwork 3",
  "Ámbito Científico",
];

const asignaturas4PMAR = [
  "Ciencias sociales",
  "Castellano",
  "Ambito tecnológico",
  "Teamwork 4",
  "Valores",
];
const opts1ESO = ["Francés", "Religión"];
const opts2ESO = ["Francés", "Religión"];
const opts3ESO = [
  "Francés",
  "Religión",
  "Creatividad musical",
  "Cultura clàsica",
];
const opts4ESO = [
  "Biología y Geología",
  "Economía",
  "Francés",
  "Religión",
  "Física y Química",
  "Inglés oral",
  "Música",
  "Latín",
  "Matemáticas aplic.",
];
const opts1FPB = [];
const opts2FPB = [];
const opts2PMAR = ["Religión", "Francés"];
const opts3PMAR = ["Francés", "Religión", "Creatividad musical"];
const opts4PMAR = ["Economía", "Francés", "Religión", "Inglés oral", "Música"];

const asignaturas1BACH = [
  "Castellano",
  "Inglés",
  "Filosofía",
  "Llengua i literatura",
];
const asignaturas2BACH = ["Inglés"];
const opts1BACH = [
  "Dibujo Técnico",
  "Historia del mundo",
  "Griego",
  "Matemáticas CCSS",
  "Biología y geología",
  "Tecnología e ingeniería I",
  "Francés",
  "Lenguaje y práctica musical",
];
const opts2BACH = [
  "Francés",
  "Historia de España",
  "Matemáticas de ciencias (OPT)",
  "Matemáticas de CCSS (OPT)",
  "BIOLOGÍA",
  "GEOLOGÍA",
  "FÍSICA",
  "PSICOLOGÍA",
  "GEOGRAFÍA DE ESPAÑA",
  "Dibujo técnico II",
  "Griego II",
  "Latin II",
  "Tecnología e ingeniería II",
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

class AsistenteDevolucion extends React.Component {
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
    this.problemasConfig.push(["En buen estado", "list-group-item-success"]);
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
      `- ${this.asignaturasConfig[this.state.asignaturaSeleccionada][0]} ${
        this.problemasConfig[this.state.problemaSeleccionado][0]
      }`
    );
  };

  render() {
    this.prepararConfiguracion();
    return (
      <div>
        <input
          className="btn btn-primary"
          type="button"
          value="Asistente de devolucion"
          data-bs-toggle="modal"
          data-bs-target="#asistenteDev"
        />
        <div
          className="modal fade"
          id="asistenteDev"
          tabIndex="-1"
          aria-labelledby="asistenteDevLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="asistenteDevLabel">
                  Asistente de devolución
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
export default AsistenteDevolucion;
