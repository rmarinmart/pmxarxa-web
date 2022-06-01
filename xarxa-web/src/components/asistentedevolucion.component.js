import React from "react";
import ListGroup from "./listGroup.component";

const asignaturas1ESO = ["Valenciano", "Castellano", "Inglés", "Biología y Geología", "Tecnología", "Música", "Geografía e Historia"];
const asignaturas2ESO = ["Valenciano", "Castellano", "Inglés", "Física y Química", "Tecnología", "Música", "Geografía e Historia"];
const asignaturas3ESO = ["Valenciano", "Castellano", "Inglés", "Biología y Geología", "Tecnología", "Música", "Geografía e Historia", "Física y Química"];
const asignaturas4ESO = ["Valenciano", "Inglés", "Biología y Geología", "Tecnología", "Música", "Geografía e Historia"];
const asignaturas1FPB = ["Taller de llengua", "Ciencias aplicadas I", "Comunicación y sociedad I"];
const asignaturas2FPB = ["Taller de llengua", "Ciencias aplicadas II", "Comunicación y sociedad II"];
const opts1ESO = ["Francés", "Religión", "Valores"];
const opts2ESO = ["Francés", "Religión", "Valores"];
const opts3ESO = ["Francés", "Religión", "Valores", "Cultura clásica"];
const opts4ESO = ["Francés", "Religión", "Valores", "Filosofía", "Economía", "Latín", "Cultura clàsica"];
const opts1FPB = [];
const opts2FPB = [];

const asignaturas = [asignaturas1ESO,asignaturas2ESO,asignaturas3ESO,asignaturas4ESO, asignaturas1FPB, asignaturas2FPB];
const optativas = [opts1ESO, opts2ESO,opts3ESO,opts4ESO, opts1FPB, opts2FPB];
const problemasTipicos = ["Bordes estropeados", "Escrito a lápiz", "Escrito a bolígrafo", "Subrayado con marcador", "Tapas muy estropeadas"];

class AsistenteDevolucion extends React.Component {
  constructor(props) {
    super(props);
    this.closeButton = React.createRef();
    this.asignaturaSeleccionada = asignaturas[this.props.curso][0];
    this.problemaSeleccionado =problemasTipicos[0];
    this.asignaturasConfig = asignaturas[this.props.curso].map((asignatura)=>[asignatura, "list-group-item-primary"]);
    this.asignaturasConfig.push(...(optativas[this.props.curso].map((opt)=>[opt,"list-group-item-info"])));
    this.problemasConfig = problemasTipicos.map((problema)=>[problema, "list-group-item-danger"]);

  }

  onSelectAsignatura = (asignatura) => this.asignaturaSeleccionada = asignatura;
  onSelectProblema = (problema) => this.problemaSeleccionado = problema;

  onAddComment = () => {
    this.props.onAddComment(`- ${this.asignaturaSeleccionada} ${this.problemaSeleccionado}`);
  }

  render() {
    
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
                  <div className="row">
                      <div className="col">
                        <ListGroup items={this.asignaturasConfig} onSelectItem={this.onSelectAsignatura}/>
                      </div>
                      <div className="col">
                      <ul className="list-group">
                        <ListGroup items={this.problemasConfig} onSelectItem={this.onSelectProblema}/>
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
