import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: "http://localhost:9000",
    baseURL: "https://my-json-server.typicode.com/faisaltonmoy/apiTest",
  });

export default axiosInstance;