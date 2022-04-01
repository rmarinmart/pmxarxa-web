import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useSearchParams,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import AlumnosList from "./components/alumnos-list.component";
import Alumno from "./components/alumno.component";

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
            Alumnos
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route exact path={"/"} element={<TutorialsList />} />
            <Route exact path={"/alumnos"} element={<AlumnosList />} />
            <Route path={"/alumnos/:id"} element={<BuildAlumnoComponent />} />
            <Route exact path={"/tutorials"} element={<TutorialsList />} />
            <Route exact path="/add" element={<AddTutorial />} />
            <Route path="/tutorials/:id" element={<Tutorial />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App;

/*


*/
