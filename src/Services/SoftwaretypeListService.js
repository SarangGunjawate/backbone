import axiosInstance from "./Api";
import {
  getSoftwareTypeURL,
  getDeleteSoftTypeUrl,
  getSoftwareDetailsURL,
  getSoftwareTypeUpdateURL,
} from "./ApiConfig";

export const fetchSoftwareTypeList = async() => {
  return await axiosInstance.get(getSoftwareTypeURL());
};

export const deleteSoftwareType = async (UserID) => {
    console.log('useridddd', UserID)
  return await axiosInstance.delete(getDeleteSoftTypeUrl(UserID));
};

export const getSoftwareTypeDetails = async (userId) => {
  return await axiosInstance.get(getSoftwareDetailsURL(userId));
};

export const UpdateSoftwareType = async (userId) => {
  return await axiosInstance.put(getSoftwareTypeUpdateURL(userId))
}