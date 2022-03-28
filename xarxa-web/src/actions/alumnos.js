import { RETRIEVE_ALUMNOS } from "./types";
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
