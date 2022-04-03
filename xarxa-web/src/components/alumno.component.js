import React, { Component } from "react";
import { connect } from "react-redux";
import AlumnoDataService from "../services/alumno.service";

class Alumno extends Component {
  constructor(props) {
    super(props);
    this.getAlumno = this.getAlumno.bind(this);
    this.render1ESO = this.render1ESO.bind(this);
    this.state = {
      currentAlumno: {
        id: null,
        nombre: "",
        apellidos: "",
      },
      cursoIndex: 0,
    };
  }
  componentDidMount() {
    this.getAlumno(this.props.id);
  }

  calcularCursoActual(alumno) {
    if (alumno.esopres2 && !alumno.esodev2) return 1;
    if (alumno.esopres3 && !alumno.esodev3) return 2;
    if (alumno.esopres4 && !alumno.esodev4) return 3;
    if (alumno.fpbpres1 && !alumno.fpbdev1) return 4;
    if (alumno.fpbpres2) return 5;
    if (alumno.fpbpres1 && alumno.fpbdev1) return 4;
    if (alumno.esopres4 && alumno.esodev4) return 3;
    if (alumno.esopres3 && alumno.esodev3) return 2;
    if (alumno.esopres2 && alumno.esodev2) return 1;

    return 0;
  }

  getAlumno(id) {
    AlumnoDataService.get(id)
      .then((response) => {
        this.setState({
          currentAlumno: response.data,
          cursoIndex: this.calcularCursoActual(response.data),
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render1ESO(alumno, index) {
    if (index !== 0) return "";

    return this.renderCourse(
      alumno.esopres1,
      alumno.esodev1,
      alumno.esopresobs1,
      alumno.esodevobs1
    );
  }

  render2ESO(alumno, index) {
    if (index !== 1) return "";

    return this.renderCourse(
      alumno.esopres2,
      alumno.esodev2,
      alumno.esopresobs2,
      alumno.esodevobs2
    );
  }

  render3ESO(alumno, index) {
    if (index !== 2) return "";

    return this.renderCourse(
      alumno.esopres3,
      alumno.esodev3,
      alumno.esopresobs3,
      alumno.esodevobs3
    );
  }

  render4ESO(alumno, index) {
    if (index !== 3) return "";

    return this.renderCourse(
      alumno.esopres4,
      alumno.esodev4,
      alumno.esopresobs4,
      alumno.esodevobs4
    );
  }

  render1FPB(alumno, index) {
    if (index !== 4) return "";

    return this.renderCourse(
      alumno.fpbpres1,
      alumno.fpbdev1,
      alumno.fpbpresobs1,
      alumno.fpbdevobs1
    );
  }

  render2FPB(alumno, index) {
    if (index !== 5) return "";

    return this.renderCourse(
      alumno.fpbpres2,
      alumno.fpbdev2,
      alumno.fpbpresobs2,
      alumno.fpbdevobs2
    );
  }

  renderCourse(checkedPres, checkedDev, presObs, devObs) {
    return (
      <div>
        <div class="mb-3">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            checked={checkedPres}
          />
          <label class="form-check-label" for="flexCheckDefault">
            Préstamo realizado
          </label>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Observaciones préstamo
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          >
            {presObs}
          </textarea>
        </div>
        <div class="mb-3">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            checked={checkedDev}
          />
          <label class="form-check-label" for="flexCheckDefault">
            Devolución realizada
          </label>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Observaciones devolución
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          >
            {devObs}
          </textarea>
        </div>
      </div>
    );
  }

  render() {
    const { currentAlumno, cursoIndex } = this.state;

    return (
      <div>
        <h1>{`${currentAlumno.id} - ${currentAlumno.nombre} ${currentAlumno.apellidos}`}</h1>

        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a
              class={`nav-link ${cursoIndex === 0 ? "active" : ""}`}
              onClick={() => this.setState({ cursoIndex: 0 })}
              aria-current="page"
              href="#"
            >
              1º ESO
            </a>
          </li>
          <li class="nav-item">
            <a
              class={`nav-link ${cursoIndex === 1 ? "active" : ""}`}
              onClick={() => this.setState({ cursoIndex: 1 })}
              href="#"
            >
              2º ESO
            </a>
          </li>
          <li class="nav-item">
            <a
              class={`nav-link ${cursoIndex === 2 ? "active" : ""}`}
              onClick={() => this.setState({ cursoIndex: 2 })}
              href="#"
            >
              3º ESO
            </a>
          </li>
          <li class="nav-item">
            <a
              class={`nav-link ${cursoIndex === 3 ? "active" : ""}`}
              onClick={() => this.setState({ cursoIndex: 3 })}
              href="#"
            >
              4º ESO
            </a>
          </li>
          <li class="nav-item">
            <a
              class={`nav-link ${cursoIndex === 4 ? "active" : ""}`}
              onClick={() => this.setState({ cursoIndex: 4 })}
              href="#"
            >
              1º FPB
            </a>
          </li>
          <li class="nav-item">
            <a
              class={`nav-link ${cursoIndex === 5 ? "active" : ""}`}
              onClick={() => this.setState({ cursoIndex: 5 })}
              href="#"
            >
              2º FPB
            </a>
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
export default connect(null, {})(Alumno);
