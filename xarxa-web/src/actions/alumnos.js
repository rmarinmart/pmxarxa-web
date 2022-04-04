import {
  RETRIEVE_ALUMNOS,
  UPDATE_ALUMNO,
  CREATE_ALUMNO,
  DELETE_ALUMNO,
} from "./types";
import AlumnoDataService from "../services/alumno.service";

export const retrieveAlumnos = () => async (dispatch) => {
  try {
    const res = await AlumnoDataService.getAll();
    dispatch({
      type: RETRIEVE_ALUMNOS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateAlumno = (id, data) => async (dispatch) => {
  try {
    const res = await AlumnoDataService.update(id, data);
    dispatch({
      type: UPDATE_ALUMNO,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const createAlumno = (nombre, apellidos) => async (dispatch) => {
  try {
    const res = await AlumnoDataService.create({ nombre, apellidos });
    dispatch({
      type: CREATE_ALUMNO,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteAlumno = (id) => async (dispatch) => {
  try {
    await AlumnoDataService.delete(id);
    dispatch({
      type: DELETE_ALUMNO,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};
