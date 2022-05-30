import { RETRIEVE_INCIDENCIAS, CREATE_INCIDENCIA } from "../actions/types";
const initialState = [];
function incidenciaReducer(incidencias = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_INCIDENCIAS:
      return payload;
    case CREATE_INCIDENCIA:
        return [...incidencias, payload];
    default:
      return incidencias;
  }
}
export default incidenciaReducer;
