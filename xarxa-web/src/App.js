import React, { Component } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodaXarxa from "./components/todaXarxa.component";
import Alumno from "./components/alumno.component";
import Buscador from "./components/buscador.component";
import Creador from "./components/creador.component";

function BuildAlumnoComponent() {
  let { id } = useParams();
  return <Alumno id={id} />;
}

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/alumnos"} className="navbar-brand">
            XARXA
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/busqueda"} className="nav-link">
                Búsqueda
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/nuevo"} className="nav-link">
                Nuevo
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route exact path={"/"} element={<Buscador />} />
            <Route exact path={"/alumnos"} element={<TodaXarxa />} />
            <Route path={"/alumnos/:id"} element={<BuildAlumnoComponent />} />
            <Route exact path={"/busqueda"} element={<Buscador />} />
            <Route exact path={"/nuevo"} element={<Creador />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App;

/*


*/
