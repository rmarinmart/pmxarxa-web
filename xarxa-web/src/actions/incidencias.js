import {
  RETRIEVE_INCIDENCIAS,
  CREATE_INCIDENCIA,
  DELETE_INCIDENCIA,
  SEARCH_INCIDENCIAS,
} from "./types";
import IncidenciaDataService from "../services/incidencia.service";

export const retrieveIncidencias = () => async (dispatch) => {
  try {
    const res = await IncidenciaDataService.getAll();
    dispatch({
      type: RETRIEVE_INCIDENCIAS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const searchIncidencias = (alumnoId) => async (dispatch) => {
  try {
    const res = await IncidenciaDataService.search(alumnoId);
    dispatch({
      type: SEARCH_INCIDENCIAS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const createIncidencia =
  (alumnoId, descripcion, curso) => async (dispatch) => {
    try {
      const res = await IncidenciaDataService.create({
        alumnoId,
        descripcion,
        curso,
      });
      dispatch({
        type: CREATE_INCIDENCIA,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const deleteIncidencia = (id) => async (dispatch) => {
  try {
    await IncidenciaDataService.delete(id);
    dispatch({
      type: DELETE_INCIDENCIA,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};
