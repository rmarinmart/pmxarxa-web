import React, { Component } from "react";
import { connect } from "react-redux";
import AlumnoDataService from "../services/alumno.service";
import { updateAlumno } from "../actions/alumnos";
const ESO1 = 0;
const ESO2 = 1;
const ESO3 = 2;
const ESO4 = 3;
const FPB1 = 4;
const FPB2 = 5;

class Alumno extends Component {
  constructor(props) {
    super(props);
    this.getAlumno = this.getAlumno.bind(this);
    this.updateAlumno = this.updateAlumno.bind(this);
    this.render1ESO = this.render1ESO.bind(this);
    this.state = {
      currentAlumno: {
        id: null,
        nombre: "",
        apellidos: "",
      },
      cursoIndex: ESO1,
      message: "",
    };
    this.currentTimerId = null;
  }
  componentDidMount() {
    this.getAlumno(this.props.id);
  }

  calcularCursoActual(alumno) {
    if (alumno.esopres2 && !alumno.esodev2) return ESO2;
    if (alumno.esopres3 && !alumno.esodev3) return ESO3;
    if (alumno.esopres4 && !alumno.esodev4) return ESO4;
    if (alumno.fpbpres1 && !alumno.fpbdev1) return FPB1;
    if (alumno.fpbpres2) return FPB2;
    if (alumno.fpbpres1 && alumno.fpbdev1) return FPB2;
    if (alumno.esopres4 && alumno.esodev4) return ESO4;
    if (alumno.esopres3 && alumno.esodev3) return ESO4;
    if (alumno.esopres2 && alumno.esodev2) return ESO3;
    if (alumno.esopres1 && alumno.esodev1) return ESO2;

    return ESO1;
  }

  getAlumno(id) {
    AlumnoDataService.get(id)
      .then((response) => {
        this.setState({
          currentAlumno: response.data,
          cursoIndex: this.calcularCursoActual(response.data),
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateAlumno(alumno) {
    this.props
      .updateAlumno(alumno.id, alumno)
      .then((reponse) => {
        console.log(reponse);

        this.setState({ message: "The pupil was updated successfully!" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  setAndUpdate = (alumno, deferred) => {
    this.setState({
      currentAlumno: alumno,
    });
    if (deferred) {
      if (this.currentTimerId) clearTimeout(this.currentTimerId);
      this.currentTimerId = setTimeout(() => {
        this.updateAlumno(alumno);
        this.currentTimerId = null;
      }, 400);
    } else this.updateAlumno(alumno);
  };

  render1ESO(alumno, index) {
    if (index !== ESO1) return "";

    const onPresChanged = (checked) => {
      this.setAndUpdate({
        ...alumno,
        esopres1: checked,
      });
    };

    const onDevChanged = (checked) => {
      this.setAndUpdate({
        ...alumno,
        esodev1: checked,
      });
    };

    const onPresObsChanged = (text) => {
      this.setAndUpdate(
        {
          ...alumno,
          esopresobs1: text,
        },
        true
      );
    };

    const onDevObsChanged = (text) => {
      this.setAndUpdate(
        {
          ...alumno,
          esodevobs1: text,
        },
        true
      );
    };

    return this.renderCourse(
      alumno.esopres1,
      alumno.esodev1,
      alumno.esopresobs1,
      alumno.esodevobs1,
      onPresChanged,
      onDevChanged,
      onPresObsChanged,
      onDevObsChanged,
      onPresObsChanged,
      onDevObsChanged
    );
  }

  render2ESO(alumno, index) {
    if (index !== ESO2) return "";

    const onPresChanged = (checked) => {
      this.setAndUpdate({
        ...alumno,
        esopres2: checked,
      });
    };

    const onDevChanged = (checked) => {
      this.setAndUpdate({
        ...alumno,
        esodev2: checked,
      });
    };

    const onPresObsChanged = (text) => {
      this.setAndUpdate(
        {
          ...alumno,
          esopresobs2: text,
        },
        true
      );
    };

    const onDevObsChanged = (text) => {
      this.setAndUpdate(
        {
          ...alumno,
          esodevobs2: text,
        },
        true
      );
    };

    return this.renderCourse(
      alumno.esopres2,
      alumno.esodev2,
      alumno.esopresobs2,
      alumno.esodevobs2,
      onPresChanged,
      onDevChanged,
      onPresObsChanged,
      onDevObsChanged
    );
  }

  render3ESO(alumno, index) {
    if (index !== ESO3) return "";

    const onPresChanged = (checked) => {
      this.setAndUpdate({
        ...alumno,
        esopres3: checked,
      });
    };

    const onDevChanged = (checked) => {
      this.setAndUpdate({
        ...alumno,
        esodev3: checked,
      });
    };

    const onPresObsChanged = (text) => {
      this.setAndUpdate(
        {
          ...alumno,
          esopresobs3: text,
        },
        true
      );
    };

    const onDevObsChanged = (text) => {
      this.setAndUpdate(
        {
          ...alumno,
          esodevobs3: text,
        },
        true
      );
    };

    return this.renderCourse(
      alumno.esopres3,
      alumno.esodev3,
      alumno.esopresobs3,
      alumno.esodevobs3,
      onPresChanged,
      onDevChanged,
      onPresObsChanged,
      onDevObsChanged
    );
  }

  render4ESO(alumno, index) {
    if (index !== ESO4) return "";

    const onPresChanged = (checked) => {
      this.setAndUpdate({
        ...alumno,
        esopres4: checked,
      });
    };

    const onDevChanged = (checked) => {
      this.setAndUpdate({
        ...alumno,
        esodev4: checked,
      });
    };

    const onPresObsChanged = (text) => {
      this.setAndUpdate(
        {
          ...alumno,
          esopresobs4: text,
        },
        true
      );
    };

    const onDevObsChanged = (text) => {
      this.setAndUpdate(
        {
          ...alumno,
          esodevobs4: text,
        },
        true
      );
    };

    return this.renderCourse(
      alumno.esopres4,
      alumno.esodev4,
      alumno.esopresobs4,
      alumno.esodevobs4,
      onPresChanged,
      onDevChanged,
      onPresObsChanged,
      onDevObsChanged
    );
  }

  render1FPB(alumno, index) {
    if (index !== FPB1) return "";

    const onPresChanged = (checked) => {
      this.setAndUpdate({
        ...alumno,
        fpbpres1: checked,
      });
    };

    const onDevChanged = (checked) => {
      this.setAndUpdate({
        ...alumno,
        fpbdev1: checked,
      });
    };

    const onPresObsChanged = (text) => {
      this.setAndUpdate(
        {
          ...alumno,
          fpbpresobs1: text,
        },
        true
      );
    };

    const onDevObsChanged = (text) => {
      this.setAndUpdate(
        {
          ...alumno,
          fpbdevobs1: text,
        },
        true
      );
    };

    return this.renderCourse(
      alumno.fpbpres1,
      alumno.fpbdev1,
      alumno.fpbpresobs1,
      alumno.fpbdevobs1,
      onPresChanged,
      onDevChanged,
      onPresObsChanged,
      onDevObsChanged
    );
  }

  render2FPB(alumno, index) {
    if (index !== FPB2) return "";

    const onPresChanged = (checked) => {
      this.setAndUpdate({
        ...alumno,
        fpbpres2: checked,
      });
    };

    const onDevChanged = (checked) => {
      this.setAndUpdate({
        ...alumno,
        fpbdev2: checked,
      });
    };

    const onPresObsChanged = (text) => {
      this.setAndUpdate(
        {
          ...alumno,
          fpbpresobs2: text,
        },
        true
      );
    };

    const onDevObsChanged = (text) => {
      this.setAndUpdate(
        {
          ...alumno,
          fpbdevobs2: text,
        },
        true
      );
    };

    return this.renderCourse(
      alumno.fpbpres2,
      alumno.fpbdev2,
      alumno.fpbpresobs2,
      alumno.fpbdevobs2,
      onPresChanged,
      onDevChanged,
      onPresObsChanged,
      onDevObsChanged
    );
  }

  renderCourse(
    checkedPres,
    checkedDev,
    presObs,
    devObs,
    onPresChanged,
    onDevChanged,
    onPresObsChanged,
    onDevObsChanged
  ) {
    return (
      <div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            checked={checkedPres}
            onChange={(element) => onPresChanged(element.target.checked)}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Préstamo realizado
          </label>
        </div>
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
          ></textarea>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            checked={checkedDev}
            onChange={(element) => onDevChanged(element.target.checked)}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
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
          ></textarea>
        </div>
      </div>
    );
  }

  render() {
    const { currentAlumno, cursoIndex } = this.state;

    return (
      <div>
        <h1>{`${currentAlumno.id} - ${currentAlumno.nombre} ${currentAlumno.apellidos}`}</h1>

        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button
              className={`nav-link ${cursoIndex === 0 ? "active" : ""}`}
              onClick={() => this.setState({ cursoIndex: ESO1 })}
            >
              1º ESO
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${cursoIndex === 1 ? "active" : ""}`}
              onClick={() => this.setState({ cursoIndex: ESO2 })}
            >
              2º ESO
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${cursoIndex === 2 ? "active" : ""}`}
              onClick={() => this.setState({ cursoIndex: ESO3 })}
            >
              3º ESO
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${cursoIndex === 3 ? "active" : ""}`}
              onClick={() => this.setState({ cursoIndex: ESO4 })}
            >
              4º ESO
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${cursoIndex === 4 ? "active" : ""}`}
              onClick={() => this.setState({ cursoIndex: FPB1 })}
            >
              1º FPB
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${cursoIndex === 5 ? "active" : ""}`}
              onClick={() => this.setState({ cursoIndex: FPB2 })}
            >
              2º FPB
            </button>
          </li>
        </ul>
        {this.render1ESO(currentAlumno, cursoIndex)}
        {this.render2ESO(currentAlumno, cursoIndex)}
        {this.render3ESO(currentAlumno, cursoIndex)}
        {this.render4ESO(currentAlumno, cursoIndex)}
        {this.render1FPB(currentAlumno, cursoIndex)}
        {this.render2FPB(currentAlumno, cursoIndex)}
      </div>
    );
  }
}
export default connect(null, { updateAlumno })(Alumno);
