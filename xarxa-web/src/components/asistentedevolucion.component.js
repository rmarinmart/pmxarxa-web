import React from "react";
import ListGroup from "./listGroup.component";


const asignaturas = ["Tecnología", "Música", "Lengua", "Matemáticas", "Geografía", "Inglés", "Valenciano"];
const problemasTipicos = ["Bordes estropeados", "Escrito a lápiz", "Escrito a bolígrafo", "Subrayado con marcador", "Tapas muy estropeadas"];

class AsistenteDevolucion extends React.Component {
  constructor(props) {
    super(props);
    this.closeButton = React.createRef();
  }
  asignaturaSeleccionada = asignaturas[0];
  problemaSeleccionado =problemasTipicos[0];
  
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
                        <ListGroup items={asignaturas} onSelectItem={this.onSelectAsignatura}/>
                      </div>
                      <div className="col">
                      <ul className="list-group">
                        <ListGroup items={problemasTipicos} onSelectItem={this.onSelectProblema}/>
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
