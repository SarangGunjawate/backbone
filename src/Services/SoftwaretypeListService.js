import axiosInstance from "./Api";
import {
  getSoftwareTypeURL,
  getDeleteSoftTypeUrl,
  getSoftwareDetailsURL,
} from "./ApiConfig";

export const fetchSoftwareTypeList = () => {
  return axiosInstance.get(getSoftwareTypeURL());
};

export const deleteSoftwareType = async (UserID) => {
    console.log('useridddd', UserID)
  return await axiosInstance.delete(getDeleteSoftTypeUrl(UserID));
};

export const getSoftwareTypeDetails = async (userId) => {
  return await axiosInstance.get(getSoftwareDetailsURL(userId));
};