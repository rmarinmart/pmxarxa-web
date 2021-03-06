import React from "react";
import ListGroup from "./listGroup.component";

const asignaturas1ESO = [
  "Valenciano",
  "Castellano",
  "Inglés",
  "Biología y Geología",
  "Tecnología",
  "Música",
  "Geografía e Historia",
];
const asignaturas2ESO = [
  "Valenciano",
  "Castellano",
  "Inglés",
  "Física y Química",
  "Tecnología",
  "Música",
  "Geografía e Historia",
];
const asignaturas3ESO = [
  "Valenciano",
  "Castellano",
  "Inglés",
  "Biología y Geología",
  "Música",
  "Geography",
  "Física y Química",
];
const asignaturas4ESO = [
  "Castellano",
  "Valenciano",
  "Inglés",
  "Geografía e Historia",
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
  "Tecnología",
];
const asignaturas3PMAR = [
  "Valenciano",
  "Castellano",
  "Geografía",
  "All clear 2",
  "Música",
];
const asignaturas4PMAR = [
  "Ciencias sociales",
  "Castellano",
  "Matemáticas",
  "Ambito tecnológico",
  "All clear 3",
];
const opts1ESO = ["Francés", "Religión", "Valores"];
const opts2ESO = ["Francés", "Religión", "Valores"];
const opts3ESO = [
  "Francés",
  "Religión",
  "Valores",
  "Cultura clásica",
  "Inglés oral",
];
const opts4ESO = [
  "Francés",
  "Religión",
  "Valores",
  "Economía",
  "Latín",
  "Cultura clàsica",
  "Música",
  "Tecnología",
  "Inglés oral",
  "Física y Química",
  "Biología y Geología",
  "Cultura científica",
  "Matemáticas aplic.",
];
const opts1FPB = [];
const opts2FPB = [];
const opts2PMAR = ["Valores", "Religión", "Francés"];
const opts3PMAR = ["Valores", "Religión"];
const opts4PMAR = ["Música", "Cultura científica", "Francés"];

const asignaturas = [
  asignaturas1ESO,
  asignaturas2ESO,
  asignaturas3ESO,
  asignaturas4ESO,
  asignaturas1FPB,
  asignaturas2FPB,
  asignaturas1ESO,
  asignaturas2PMAR,
  asignaturas3PMAR,
  asignaturas4PMAR,
  asignaturas1FPB,
  asignaturas2FPB,
];
const optativas = [
  opts1ESO,
  opts2ESO,
  opts3ESO,
  opts4ESO,
  opts1FPB,
  opts2FPB,
  opts1ESO,
  opts2PMAR,
  opts3PMAR,
  opts4PMAR,
  opts1FPB,
  opts2FPB,
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
    const curso = this.state.pmar ? this.props.curso : this.props.curso + 6;
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
