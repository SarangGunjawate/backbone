import axios from "axios";
import { getAccessToken } from "../Utils/Helper";

let axiosInstance = axios.create({
  baseURL: process.env.OMS_REACT_APP_BASE_URL,
});

const errorHandler = (error) => {
  console.log("accErr", error);
  return Promise.reject(error);
};

export const setAccessToken = (token) => {
  console.log("token", token);
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

axiosInstance.interceptors.request.use(
  function (config) {
    let token = getAccessToken();
    // Do something before request is sent
    config.headers["Authorization"] = `Bearer ${token}`;
    config.headers['Content-Type'] = 'application/json,resonse_object.header("Access-Control-Allow-Origin", "*")';
    config.headers['Content-Type'] = 'application/json';
    
    // config.headers('Access-Control-Allow-Headers', 'Content-Type');
    return config;
  },
  (error) => errorHandler(error)
);

const axiosObj = {
  get: axiosInstance.get,
  post: (url, data, options) => axiosInstance.post(url, data, options),
  delete: axiosInstance.delete,
  put: (url, data) => axiosInstance.put(url, data),
};

export default axiosObj;
