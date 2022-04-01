import http from "../http-common";
class AlumnoDataService {
  getAll() {
    return http.get("/alumnos");
  }
  get(id) {
    return http.get(`/alumnos/${id}`);
  }
}
export default new AlumnoDataService();
