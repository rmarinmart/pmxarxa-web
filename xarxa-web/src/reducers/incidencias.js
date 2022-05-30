import {
  RETRIEVE_INCIDENCIAS,
  CREATE_INCIDENCIA,
  DELETE_INCIDENCIA,
} from "../actions/types";
const initialState = [];
function incidenciaReducer(incidencias = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_INCIDENCIAS:
      return payload;
    case CREATE_INCIDENCIA:
      return [...incidencias, payload];
    case DELETE_INCIDENCIA:
      return incidencias.filter(({ id }) => id !== payload.id);
    default:
      return incidencias;
  }
}
export default incidenciaReducer;
