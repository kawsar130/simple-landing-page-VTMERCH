import axios from "axios";

// Creating a new instance of Axios with base URL
const axiosInstance = axios.create({
  baseURL: "https://myapi.test",
});

export default axiosInstance;
