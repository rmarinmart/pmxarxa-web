import React, { Component } from "react";
import { connect } from "react-redux";
import AlumnoDataService from "../services/alumno.service";
import { updateAlumno } from "../actions/alumnos";
import TabsBar from "./tabsBar.component";
import Curso from "./curso.component";
import Emoji from "./emoji.component";
import Toast from "./toast.component";
import { Toast as BootstrapToast } from "../../node_modules/bootstrap/dist/js/bootstrap.esm";

const ESO1 = 0;
const ESO2 = 1;
const ESO3 = 2;
const ESO4 = 3;
const FPB1 = 4;
const FPB2 = 5;
const tabConfig = [
  { tabName: "1º ESO", tabId: ESO1 },
  { tabName: "2º ESO", tabId: ESO2 },
  { tabName: "3º ESO", tabId: ESO3 },
  { tabName: "4º ESO", tabId: ESO4 },
  { tabName: "1º FPB", tabId: FPB1 },
  { tabName: "2º FPB", tabId: FPB2 },
];

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
      toast: { title: "", message: "" },
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
        const today = new Date();
        this.setState({
          message: `The pupil could not be updated!: ${e}`,
          activeSpinner: false,
          toast: {
            title: "Xarxa",
            message:
              "No se han podido guardar los datos en el servidor. " + e.message,
            when: `${today.getHours()}:${today.getMinutes()}`,
            color: "red",
          },
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

    return (
      <Curso
        checkedPres={alumno.esopres1}
        checkedDev={alumno.esodev1}
        presObs={alumno.esopresobs1}
        devObs={alumno.esodevobs1}
        onPresChanged={onPresChanged}
        onDevChanged={onDevChanged}
        onPresObsChanged={onPresObsChanged}
        onDevObsChanged={onDevObsChanged}
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

    return (
      <Curso
        checkedPres={alumno.esopres2}
        checkedDev={alumno.esodev2}
        presObs={alumno.esopresobs2}
        devObs={alumno.esodevobs2}
        onPresChanged={onPresChanged}
        onDevChanged={onDevChanged}
        onPresObsChanged={onPresObsChanged}
        onDevObsChanged={onDevObsChanged}
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

    return (
      <Curso
        checkedPres={alumno.esopres3}
        checkedDev={alumno.esodev3}
        presObs={alumno.esopresobs3}
        devObs={alumno.esodevobs3}
        onPresChanged={onPresChanged}
        onDevChanged={onDevChanged}
        onPresObsChanged={onPresObsChanged}
        onDevObsChanged={onDevObsChanged}
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
    return (
      <Curso
        checkedPres={alumno.esopres4}
        checkedDev={alumno.esodev4}
        presObs={alumno.esopresobs4}
        devObs={alumno.esodevobs4}
        onPresChanged={onPresChanged}
        onDevChanged={onDevChanged}
        onPresObsChanged={onPresObsChanged}
        onDevObsChanged={onDevObsChanged}
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

    return (
      <Curso
        checkedPres={alumno.fpbpres1}
        checkedDev={alumno.fpbdev1}
        presObs={alumno.fpbpresobs1}
        devObs={alumno.fpbdevobs1}
        onPresChanged={onPresChanged}
        onDevChanged={onDevChanged}
        onPresObsChanged={onPresObsChanged}
        onDevObsChanged={onDevObsChanged}
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

    return (
      <Curso
        checkedPres={alumno.fpbpres2}
        checkedDev={alumno.fpbdev2}
        presObs={alumno.fpbpresobs2}
        devObs={alumno.fpbdevobs2}
        onPresChanged={onPresChanged}
        onDevChanged={onDevChanged}
        onPresObsChanged={onPresObsChanged}
        onDevObsChanged={onDevObsChanged}
      />
    );
  }

  onSetTab = (selectedTab) => {
    this.setState({ cursoIndex: selectedTab });
  };

  render() {
    const { currentAlumno, cursoIndex, activeSpinner, toast } = this.state;

    return (
      <div>
        <h1>
          {`${currentAlumno.id} - ${currentAlumno.nombre} ${currentAlumno.apellidos}`}
          {activeSpinner ? (
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <Emoji symbol="🟢" />
          )}
        </h1>

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
        <Toast
          ref={this.alumnoToast}
          title={toast.title}
          when={toast.when}
          message={toast.message}
          color={toast.color}
        />
      </div>
    );
  }
}
export default connect(null, { updateAlumno })(Alumno);
