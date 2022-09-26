import {getSoftwaresubTypeURL} from '../Services/ApiConfig';
import axiosInstance from "./Api";

export const fetchSoftwareSubType = async() => {
    return await axiosInstance.get(getSoftwaresubTypeURL());
}