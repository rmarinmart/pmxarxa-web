import http from "../http-common";
class AlumnoDataService {
  getAll() {
    return http.get("/alumnos");
  }
}
export default new AlumnoDataService();
