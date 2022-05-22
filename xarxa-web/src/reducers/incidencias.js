import { RETRIEVE_INCIDENCIAS } from "../actions/types";
const initialState = [];
function incidenciaReducer(incidencias = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_INCIDENCIAS:
      return payload;
    default:
      return incidencias;
  }
}
export default incidenciaReducer;
