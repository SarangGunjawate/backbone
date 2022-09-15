import { getSignInURL, getSoftwareTypeURL } from './ApiConfig'
import axiosInstance from './Api'

export const login = async (data) => {
    console.log('data', data);
    return await axiosInstance.post(getSignInURL(), JSON.stringify(data));
}

export const Softwaretyp = (parameters) => {
    console.log('data', parameters);
    return axiosInstance.post(getSoftwareTypeURL(), JSON.stringify(parameters));
}