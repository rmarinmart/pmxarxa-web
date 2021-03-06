import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark no-print">
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
              Nuevo alumno
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/incidencias"} className="nav-link">
              Resumen de incidencias
            </Link>
          </li>
        </div>
      </nav>
    );
  }
}

export default NavBar;
