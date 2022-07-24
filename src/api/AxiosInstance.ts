import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
export default AxiosInstance;
