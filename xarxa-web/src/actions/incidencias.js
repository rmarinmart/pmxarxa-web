import { RETRIEVE_INCIDENCIAS } from "./types";
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
