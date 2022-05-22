import { combineReducers } from "redux";
import alumnos from "./alumnos";
import incidencias from "./incidencias";
export default combineReducers({
  alumnos,
  incidencias,
});
