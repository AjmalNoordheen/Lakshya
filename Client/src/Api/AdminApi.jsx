import axios from "axios";

const adminInstance = axios.create({
  baseURL: "http://localhost:3000/admin/",
});
export default adminInstance;
