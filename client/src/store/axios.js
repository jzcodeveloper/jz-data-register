import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jz-data-register.herokuapp.com/api"
  /* baseURL: "http://localhost:5002/api" */
});

export default axiosInstance;
