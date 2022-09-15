import axiosInstance from './Api'
import {getSoftwareTypeURL} from './ApiConfig'

export const fetchSoftwareTypeList = () => {
    return axiosInstance.get(getSoftwareTypeURL());
}