import axios from "axios";
const axiosInstance = axios.create({
  // baseURL:"http://127.0.0.1:5001/clone-24a51/us-central1/api",
  baseURL:"https://amazon-api-deploy-37zb.onrender.com",
});
export {axiosInstance};