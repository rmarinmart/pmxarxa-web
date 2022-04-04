import {
  RETRIEVE_ALUMNOS,
  UPDATE_ALUMNO,
  CREATE_ALUMNO,
  DELETE_ALUMNO,
} from "../actions/types";
const initialState = [];
function alumnoReducer(alumnos = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_ALUMNOS:
      return payload;
    case UPDATE_ALUMNO:
      return alumnos.map((alumno) => {
        if (alumno.id === payload.id) {
          return {
            ...alumno,
            ...payload,
          };
        } else {
          return alumno;
        }
      });
    case CREATE_ALUMNO:
      return [...alumnos, payload];
    case DELETE_ALUMNO:
      return alumnos.filter(({ id }) => id !== payload.id);
    default:
      return alumnos;
  }
}
export default alumnoReducer;
