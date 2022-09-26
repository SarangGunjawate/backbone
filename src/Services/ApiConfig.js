const BaseURL = process.env.REACT_APP_OMS_BASE_URL;
console.log('baseUrl', BaseURL)

export const getSignInURL = () => `${BaseURL}/api/token/`;
export const getSoftwareTypeURL = () => `${BaseURL}/software/Softwaretype/`;
export const getSoftwareList = () => `${BaseURL}/software/software/`;
export const getSoftwareDetailsURL = (userId) => `${BaseURL}/software/Softwaretype/${userId}`;
export const getDeleteSoftTypeUrl = (id) => `${BaseURL}/software/Softwaretype/${id}/`;
export const getSoftwaresubTypeURL = () => `${BaseURL}/software/SoftwreSubType/`;
export const getSoftwareTypeUpdateURL = (id) => `${BaseURL}/software/Softwaretype/${id}/`;
export const getSignupURL = () => `${BaseURL}/accounts/user/`;