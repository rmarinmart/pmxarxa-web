import React, { Component } from "react";
import { connect } from "react-redux";
import AlumnoDataService from "../services/alumno.service";

class Alumno extends Component {
  constructor(props) {
    super(props);
    this.getAlumno = this.getAlumno.bind(this);
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
    if(alumno.esopres2 && !alumno.esodev2) return 1;
    if(alumno.esopres3 && !alumno.esodev3) return 2;
    if(alumno.esopres4 && !alumno.esodev4) return 3;
    if(alumno.fpbpres1 && !alumno.fpbdev1) return 4;
    if(alumno.fpbpres2 && !alumno.fpbdev2) return 5;
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

  render() {
    const { currentAlumno, cursoIndex } = this.state;

    return (
      <div>
        <h1>{`${currentAlumno.id} - ${currentAlumno.nombre} ${currentAlumno.apellidos}`}</h1>

        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class={`nav-link ${cursoIndex===0?"active":""}`} onClick={()=>this.setState({cursoIndex: 0})} aria-current="page" href="#">1º ESO</a>
          </li>
          <li class="nav-item">
            <a class={`nav-link ${cursoIndex===1?"active":""}`} onClick={()=>this.setState({cursoIndex: 1})} href="#">2º ESO</a>
          </li>
          <li class="nav-item">
            <a class={`nav-link ${cursoIndex===2?"active":""}`} onClick={()=>this.setState({cursoIndex: 2})} href="#">3º ESO</a>
          </li>
          <li class="nav-item">
            <a class={`nav-link ${cursoIndex===3?"active":""}`} onClick={()=>this.setState({cursoIndex: 3})} href="#">4º ESO</a>
          </li>
          <li class="nav-item">
            <a class={`nav-link ${cursoIndex===4?"active":""}`} onClick={()=>this.setState({cursoIndex: 4})} href="#">1º FPB</a>
          </li>
          <li class="nav-item">
            <a class={`nav-link ${cursoIndex===5?"active":""}`} onClick={()=>this.setState({cursoIndex: 5})} href="#">2º FPB</a>
          </li>    
        </ul>   
        <div class="mb-3">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked />
          <label class="form-check-label" for="flexCheckDefault">Préstamo realizado</label>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Observaciones préstamo</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">-Todo en buen estado</textarea>
        </div>     
        <div class="mb-3">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label class="form-check-label" for="flexCheckDefault">Devolución realizada</label>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Observaciones devolución</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>           
      </div>
    );
  }
}
export default connect(null, {})(Alumno);
