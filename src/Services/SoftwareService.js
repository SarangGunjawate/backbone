import axiosInstance from './Api'
import {getSoftwareList} from './ApiConfig'

export const fetchSoftwareList = () => {
    return axiosInstance.get(getSoftwareList())
}