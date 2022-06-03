import React from "react";
import ListGroup from "./listGroup.component";

const asignaturas1ESO = ["Valenciano", "Castellano", "Inglés", "Biología y Geología", "Tecnología", "Música", "Geografía e Historia"];
const asignaturas2ESO = ["Valenciano", "Castellano", "Inglés", "Física y Química", "Tecnología", "Música", "Geografía e Historia"];
const asignaturas3ESO = ["Valenciano", "Castellano", "Inglés", "Biología y Geología", "Música", "Geografía e Historia", "Física y Química"];
const asignaturas4ESO = ["Valenciano", "Inglés", "Biología y Geología", "Geografía e Historia"];
const asignaturas1FPB = ["Taller de llengua", "Ciencias aplicadas I", "Comunicación y sociedad I"];
const asignaturas2FPB = ["Taller de llengua", "Ciencias aplicadas II", "Comunicación y sociedad II"];
const asignaturas2PMAR = ["PMAR2-a", "PMAR2-b"];
const asignaturas3PMAR = ["PMAR3-a", "PMAR3-b"];
const asignaturas4PMAR = ["PMAR4-a", "PMAR4-b"];
const opts1ESO = ["Francés", "Religión", "Valores"];
const opts2ESO = ["Francés", "Religión", "Valores"];
const opts3ESO = ["Francés", "Religión", "Valores", "Cultura clásica"];
const opts4ESO = ["Francés", "Religión", "Valores", "Economía", "Latín", "Cultura clàsica", "Música", "Tecnología"];
const opts1FPB = [];
const opts2FPB = [];
const opts2PMAR = ["OPT-PMAR2a", "OPT-PMAR2b"];
const opts3PMAR= ["OPT-PMAR3a", "OPT-PMAR3b"];
const opts4PMAR = ["OPT-PMAR4a", "OPT-PMAR4b"];


const asignaturas = [asignaturas1ESO,asignaturas2ESO,asignaturas3ESO,asignaturas4ESO, asignaturas1FPB, asignaturas2FPB, asignaturas1ESO, asignaturas2PMAR, asignaturas3PMAR, asignaturas4PMAR, asignaturas1FPB, asignaturas2FPB];
const optativas = [opts1ESO, opts2ESO,opts3ESO,opts4ESO, opts1FPB, opts2FPB, opts1ESO, opts2PMAR,opts3PMAR,opts4PMAR, opts1FPB, opts2FPB];
const problemasTipicos = ["Bordes estropeados", "Escrito a lápiz", "Escrito a bolígrafo", "Subrayado con marcador", "Tapas muy estropeadas"];

class AsistenteDevolucion extends React.Component {
  constructor(props) {
    super(props);
    this.state ={ pmar: false}
    this.closeButton = React.createRef();    
    this.problemasConfig = problemasTipicos.map((problema)=>[problema, "list-group-item-danger"]);
    this.problemasConfig.push(["En buen estado", "list-group-item-success"]);  
  }

  prepararConfiguracion = () => {
    const curso = this.state.pmar?(this.props.curso + 6):this.props.curso;
    this.asignaturaSeleccionada = asignaturas[curso][0];
    this.problemaSeleccionado =problemasTipicos[0];
    this.asignaturasConfig = asignaturas[curso].map((asignatura)=>[asignatura, "list-group-item-primary"]);
    this.asignaturasConfig.push(...(optativas[curso].map((opt)=>[opt,"list-group-item-info"])));
  }

  onPMARSwitch = (pmarActivado)=> {
    this.setState({pmar:!this.state.pmar});    
  }

  onSelectAsignatura = (asignatura) => this.asignaturaSeleccionada = asignatura;
  onSelectProblema = (problema) => this.problemaSeleccionado = problema;

  onAddComment = () => {
    this.props.onAddComment(`- ${this.asignaturaSeleccionada} ${this.problemaSeleccionado}`);
  }

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
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Curso PMAR</label>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={this.state.pmar} onChange={this.onPMARSwitch}/>                    
                  </div>
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
