const BaseURL = process.env.REACT_APP_OMS_BASE_URL;
console.log('baseUrl', BaseURL)


export const getSignInURL = () => `${BaseURL}/api/token/`
export const getSoftwareTypeURL = () => 'http://192.168.0.178:8000/user';
export const getSoftwareList = () => `${BaseURL}/Software/`;
