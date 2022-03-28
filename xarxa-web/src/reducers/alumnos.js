import { RETRIEVE_ALUMNOS } from "../actions/types";
const initialState = [];
function alumnoReducer(alumnos = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_ALUMNOS:
      return payload;
    default:
      return alumnos;
  }
}
export default alumnoReducer;
