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
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => errorHandler(error)
);

const axiosObj = {
  post: (url, data, options) => axiosInstance.post(url, data, options),
};

export default axiosObj;
