import React, { Component } from "react";
import { connect } from "react-redux";
import AlumnoDataService from "../services/alumno.service";
import { updateAlumno } from "../actions/alumnos";
import TabsBar from "./tabsBar.component";
import Curso from "./curso.component";
import Toast from "./toast.component";
import { Toast as BootstrapToast } from "../../node_modules/bootstrap/dist/js/bootstrap.esm";
import CabeceraAlumno from "./cabeceraAlumno.component";
import {
  BACH1,
  BACH2,
  ESO1,
  ESO2,
  ESO3,
  ESO4,
  FPB1,
  FPB2,
  tabConfig,
} from "../config";

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
      activeSpinner: false,
      editName: false,
      message: "",
    };
    this.currentTimerId = null;
    this.alumnoToast = React.createRef();
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
    if (alumno.esopres4 && alumno.esodev4) return BACH1;
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
    this.setState({ activeSpinner: true });
    this.props
      .updateAlumno(alumno.id, alumno)
      .then((reponse) => {
        this.setState({
          message: "The pupil was updated successfully!",
          activeSpinner: false,
        });
      })
      .catch((e) => {
        this.setState({
          message:
            "No se han podido guardar los datos en el servidor. " + e.message,
          activeSpinner: false,
        });
        new BootstrapToast(this.alumnoToast.current.toastRef.current).show();
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
          esopres1: text.length > 0 ? true : alumno.esopres1,
        },
        true
      );
    };

    const onDevObsChanged = (text) => {
      this.setAndUpdate(
        {
          ...alumno,
          esodevobs1: text,
          esodev1: text.length > 0 ? true : alumno.esodev1,
        },
        true
      );
    };

    return (
      <Curso
        alumno={alumno}
        checkedPres={alumno.esopres1}
        checkedDev={alumno.esodev1}
        presObs={alumno.esopresobs1}
        devObs={alumno.esodevobs1}
        onPresChanged={onPresChanged}
        onDevChanged={onDevChanged}
        onPresObsChanged={onPresObsChanged}
        onDevObsChanged={onDevObsChanged}
        cursoIndex={index}
      />
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
          esopres2: text.length > 0 ? true : alumno.esopres2,
        },
        true
      );
    };

    const onDevObsChanged = (text) => {
      this.setAndUpdate(
        {
          ...alumno,
          esodevobs2: text,
          esodev2: text.length > 0 ? true : alumno.esodev2,
        },
        true
      );
    };

    return (
      <Curso
        alumno={alumno}
        checkedPres={alumno.esopres2}
        checkedDev={alumno.esodev2}
        presObs={alumno.esopresobs2}
        devObs={alumno.esodevobs2}
        onPresChanged={onPresChanged}
        onDevChanged={onDevChanged}
        onPresObsChanged={onPresObsChanged}
        onDevObsChanged={onDevObsChanged}
        cursoIndex={index}
      />
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
          esopres3: text.length > 0 ? true : alumno.esopres3,
        },
        true
      );
    };

    const onDevObsChanged = (text) => {
      this.setAndUpdate(
        {
          ...alumno,
          esodevobs3: text,
          esodev3: text.length > 0 ? true : alumno.esodev3,
        },
        true
      );
    };

    return (
      <Curso
        alumno={alumno}
        checkedPres={alumno.esopres3}
        checkedDev={alumno.esodev3}
        presObs={alumno.esopresobs3}
        devObs={alumno.esodevobs3}
        onPresChanged={onPresChanged}
        onDevChanged={onDevChanged}
        onPresObsChanged={onPresObsChanged}
        onDevObsChanged={onDevObsChanged}
        cursoIndex={index}
      />
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
          esopres4: text.length > 0 ? true : alumno.esopres4,
        },
        true
      );
    };

    const onDevObsChanged = (text) => {
      this.setAndUpdate(
        {
          ...alumno,
          esodevobs4: text,
          esodev4: text.length > 0 ? true : alumno.esodev4,
        },
        true
      );
    };
    return (
      <Curso
        alumno={alumno}
        checkedPres={alumno.esopres4}
        checkedDev={alumno.esodev4}
        presObs={alumno.esopresobs4}
        devObs={alumno.esodevobs4}
        onPresChanged={onPresChanged}
        onDevChanged={onDevChanged}
        onPresObsChanged={onPresObsChanged}
        onDevObsChanged={onDevObsChanged}
        cursoIndex={index}
      />
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
          fpbpres1: text.length > 0 ? true : alumno.fpbpres1,
        },
        true
      );
    };

    const onDevObsChanged = (text) => {
      this.setAndUpdate(
        {
          ...alumno,
          fpbdevobs1: text,
          fpbdev1: text.length > 0 ? true : alumno.fpbdev1,
        },
        true
      );
    };

    return (
      <Curso
        alumno={alumno}
        checkedPres={alumno.fpbpres1}
        checkedDev={alumno.fpbdev1}
        presObs={alumno.fpbpresobs1}
        devObs={alumno.fpbdevobs1}
        onPresChanged={onPresChanged}
        onDevChanged={onDevChanged}
        onPresObsChanged={onPresObsChanged}
        onDevObsChanged={onDevObsChanged}
        cursoIndex={index}
      />
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
          fpbpres2: text.length > 0 ? true : alumno.fpbpres2,
        },
        true
      );
    };

    const onDevObsChanged = (text) => {
      this.setAndUpdate(
        {
          ...alumno,
          fpbdevobs2: text,
          fpbdev2: text.length > 0 ? true : alumno.fpbdev2,
        },
        true
      );
    };

    return (
      <Curso
        alumno={alumno}
        checkedPres={alumno.fpbpres2}
        checkedDev={alumno.fpbdev2}
        presObs={alumno.fpbpresobs2}
        devObs={alumno.fpbdevobs2}
        onPresChanged={onPresChanged}
        onDevChanged={onDevChanged}
        onPresObsChanged={onPresObsChanged}
        onDevObsChanged={onDevObsChanged}
        cursoIndex={index}
      />
    );
  }

  render1Bach(alumno, index) {
    if (index !== BACH1) return "";

    const onPresChanged = (checked) => {
      this.setAndUpdate({
        ...alumno,
        batchpres1: checked,
      });
    };

    const onDevChanged = (checked) => {
      this.setAndUpdate({
        ...alumno,
        batchdev1: checked,
      });
    };

    const onPresObsChanged = (text) => {
      this.setAndUpdate(
        {
          ...alumno,
          batchpresobs1: text,
          batchpres1: text.length > 0 ? true : alumno.batchpres1,
        },
        true
      );
    };

    const onDevObsChanged = (text) => {
      this.setAndUpdate(
        {
          ...alumno,
          batchdevobs1: text,
          batchdev1: text.length > 0 ? true : alumno.batchdev1,
        },
        true
      );
    };

    return (
      <Curso
        alumno={alumno}
        checkedPres={alumno.batchpres1}
        checkedDev={alumno.batchdev1}
        presObs={alumno.batchpresobs1}
        devObs={alumno.batchdevobs1}
        onPresChanged={onPresChanged}
        onDevChanged={onDevChanged}
        onPresObsChanged={onPresObsChanged}
        onDevObsChanged={onDevObsChanged}
        cursoIndex={index}
      />
    );
  }

  render2Bach(alumno, index) {
    if (index !== BACH2) return "";

    const onPresChanged = (checked) => {
      this.setAndUpdate({
        ...alumno,
        batchpres2: checked,
      });
    };

    const onDevChanged = (checked) => {
      this.setAndUpdate({
        ...alumno,
        batchdev2: checked,
      });
    };

    const onPresObsChanged = (text) => {
      this.setAndUpdate(
        {
          ...alumno,
          batchpresobs2: text,
          batchpres2: text.length > 0 ? true : alumno.batchpres2,
        },
        true
      );
    };

    const onDevObsChanged = (text) => {
      this.setAndUpdate(
        {
          ...alumno,
          batchdevobs2: text,
          batchdev2: text.length > 0 ? true : alumno.batchdev2,
        },
        true
      );
    };

    return (
      <Curso
        alumno={alumno}
        checkedPres={alumno.batchpres2}
        checkedDev={alumno.batchdev2}
        presObs={alumno.batchpresobs2}
        devObs={alumno.batchdevobs2}
        onPresChanged={onPresChanged}
        onDevChanged={onDevChanged}
        onPresObsChanged={onPresObsChanged}
        onDevObsChanged={onDevObsChanged}
        cursoIndex={index}
      />
    );
  }

  onSetTab = (selectedTab) => {
    this.setState({ cursoIndex: selectedTab });
  };

  onSaveName = (e) => {
    e.preventDefault();
    this.updateAlumno(this.state.currentAlumno);
    this.setState({ editName: false });
  };

  onEditName = (e) => {
    this.setState({
      currentAlumno: { ...this.state.currentAlumno, nombre: e.target.value },
    });
  };

  onEditSurname = (e) => {
    this.setState({
      currentAlumno: {
        ...this.state.currentAlumno,
        apellidos: e.target.value,
      },
    });
  };

  onStartEdit = () => {
    this.setState({ editName: true });
  };

  render() {
    const { currentAlumno, cursoIndex, activeSpinner, message, editName } =
      this.state;

    if (!currentAlumno || !currentAlumno.id) return <h5>Cargando...</h5>;

    return (
      <div>
        <CabeceraAlumno
          editName={editName}
          currentAlumno={currentAlumno}
          activeSpinner={activeSpinner}
          onSaveName={this.onSaveName}
          onEditName={this.onEditName}
          onEditSurname={this.onEditSurname}
          onStartEdit={this.onStartEdit}
        />
        <TabsBar
          tabsConfig={tabConfig}
          onSetTab={this.onSetTab}
          initialTab={cursoIndex}
        />

        {this.render1ESO(currentAlumno, cursoIndex)}
        {this.render2ESO(currentAlumno, cursoIndex)}
        {this.render3ESO(currentAlumno, cursoIndex)}
        {this.render4ESO(currentAlumno, cursoIndex)}
        {this.render1FPB(currentAlumno, cursoIndex)}
        {this.render2FPB(currentAlumno, cursoIndex)}
        {this.render1Bach(currentAlumno, cursoIndex)}
        {this.render2Bach(currentAlumno, cursoIndex)}
        <Toast ref={this.alumnoToast} message={message} />
      </div>
    );
  }
}
export default connect(null, { updateAlumno })(Alumno);
