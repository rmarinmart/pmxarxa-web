import http from "../http-common";
class IncidenciaDataService {
  getAll() {
    return http.get("/incidencias");
  }
  get(id) {
    return http.get(`/incidencias/${id}`);
  }
  search(alumnoId) {
    return http.get(`/incidencias/?alumnoId=${alumnoId}`);
  }
  create(data) {
    return http.post("/incidencias", data);
  }
  delete(id) {
    return http.delete(`/incidencias/${id}`);
  }
}
export default new IncidenciaDataService();
