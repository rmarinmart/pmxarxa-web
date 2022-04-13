import React from 'react';
import { Link } from "react-router-dom";


class NavBar extends React.Component 
{
    render() {
        return (
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
        );
    }
}

export default NavBar;