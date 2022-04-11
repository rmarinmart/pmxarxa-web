import axios from "axios";

const PORT = process.env.PORT ||  8080;
export default axios.create({
  baseURL: `http://${window.location.hostname}:${PORT}/api`,
  headers: {
    "Content-type": "application/json",
  },
});
