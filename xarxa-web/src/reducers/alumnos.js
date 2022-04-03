import { RETRIEVE_ALUMNOS, UPDATE_ALUMNO } from "../actions/types";
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
    default:
      return alumnos;
  }
}
export default alumnoReducer;
