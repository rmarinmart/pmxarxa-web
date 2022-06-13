import React from "react";
import { connect } from "react-redux";
import { searchIncidencias } from "../actions/incidencias";
import AsistenteDevolucion from "./asistentedevolucion.component";
import IncidenciaModalComponent from "./incidenciaModal.component";
import Incidencias from "./incidencias.component";

const MIN_TEXTAREA_HEIGHT = 96;

class Curso extends React.Component {
  constructor(props) {
    super(props);
    this.presTextArea = React.createRef();
    this.devTextArea = React.createRef();
  }

  state = { incidenciasPendientes: 0 };

  ajustarAlturaTextAreas() {
    if (this.presTextArea.current.scrollHeight > MIN_TEXTAREA_HEIGHT)
      this.presTextArea.current.style.height = `${this.presTextArea.current.scrollHeight}px`;
    else this.presTextArea.current.style.height = MIN_TEXTAREA_HEIGHT;
    if (this.devTextArea.current.scrollHeight > MIN_TEXTAREA_HEIGHT)
      this.devTextArea.current.style.height = `${this.devTextArea.current.scrollHeight}px`;
    else this.devTextArea.current.style.height = MIN_TEXTAREA_HEIGHT;
  }

  componentDidMount() {
    this.ajustarAlturaTextAreas();
    this.props.searchIncidencias(this.props.alumno.id);
    this.comprobarIncidencias();
  }

  componentDidUpdate() {
    this.ajustarAlturaTextAreas();
    this.comprobarIncidencias();
  }

  comprobarIncidencias() {
    if (this.props.incidencias) {
      const incAlumno = this.props.incidencias.reduce(
        (previousVal, currentVal) => {
          if (currentVal.alumnoId === this.props.alumno.id)
            return previousVal + 1;
          return previousVal;
        },
        0
      );
      if (incAlumno !== this.state.incidenciasPendientes)
        this.setState({ incidenciasPendientes: incAlumno });
    }
  }

  renderPrimerCheck(checkedPres, onPresChanged) {
    if (this.state.incidenciasPendientes > 0 && !checkedPres) {
      return (
        <div className="mb-3">
          <div className="alert alert-danger" role="alert">
            No se puede realizar un préstamo hasta que el alumno resuelva las
            incidencias pendientes
          </div>
        </div>
      );
    } else {
      return (
        <div className="mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            value={""}
            id="flexCheckDefault-1"
            checked={checkedPres}
            onChange={(element) => onPresChanged(element.target.checked)}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault-1">
            Préstamo realizado
          </label>
        </div>
      );
    }
  }

  onAddComment = (newComment) => {
    if (this.props.devObs.length > 0) newComment = "\n" + newComment;
    this.props.onDevObsChanged(this.props.devObs + newComment);
  };

  render() {
    const {
      alumno,
      checkedPres,
      checkedDev,
      presObs,
      devObs,
      onPresChanged,
      onDevChanged,
      onPresObsChanged,
      onDevObsChanged,
      cursoIndex,
    } = this.props;
    return (
      <div>
        {this.renderPrimerCheck(checkedPres, onPresChanged)}
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Observaciones préstamo
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(element) => onPresObsChanged(element.target.value)}
            value={presObs}
            ref={this.presTextArea}
          ></textarea>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexCheckDefault2"
            value={""}
            checked={checkedDev}
            onChange={(element) => onDevChanged(element.target.checked)}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault2">
            Devolución realizada
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Observaciones devolución
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(element) => onDevObsChanged(element.target.value)}
            value={devObs}
            ref={this.devTextArea}
          ></textarea>
        </div>
        <Incidencias removeHeader={true} alumnoId={alumno.id} />
        <p />
        <IncidenciaModalComponent
          alumno={alumno}
          cursoIndex={cursoIndex}
          onIncidenciaCreada={onDevChanged}
        />
        <p />
        <AsistenteDevolucion
          onAddComment={this.onAddComment}
          curso={cursoIndex}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    incidencias: state.incidencias,
  };
};

export default connect(mapStateToProps, { searchIncidencias })(Curso);
