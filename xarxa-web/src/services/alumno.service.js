import http from "../http-common";
class AlumnoDataService {
  getAll() {
    return http.get("/alumnos");
  }
  get(id) {
    return http.get(`/alumnos/${id}`);
  }
  update(id, data) {
    return http.put(`/alumnos/${id}`, data);
  }
}
export default new AlumnoDataService();
