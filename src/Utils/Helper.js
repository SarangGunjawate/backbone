export const isValidEmail = (email) => {
  let regex = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
  return regex.test(email);
};

export const saveAccessToken = (token) => {
    localStorage.setItem('token', token);
    console.log('token', token)
  };

export const getAccessToken = () => {
  return localStorage.getItem("token");
};
