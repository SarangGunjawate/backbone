import {getSoftwaresubTypeURL} from '../Services/ApiConfig';
import axiosInstance from "./Api";

export const fetchSoftwareSubType = () => {
    return axiosInstance.get(getSoftwaresubTypeURL());
}