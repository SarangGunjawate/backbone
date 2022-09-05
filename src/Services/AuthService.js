import { getSignInURL } from './ApiConfig'
import axiosInstance from './Api'

export const login = async (data) => {
    console.log('data', data);
    return await axiosInstance.post(getSignInURL(), JSON.stringify(data));
}