const BaseURL = process.env.REACT_APP_OMS_BASE_URL;
console.log('baseUrl', BaseURL)


export const getSignInURL = () => `${BaseURL}/api/token/`
export const getSoftwareTypeURL = () => `${BaseURL}/Softwaretype/`;
export const getSoftwareList = () => `${BaseURL}/software/`;