import React from 'react'
import SignupForm from '../Auth/SignupForm'
import {SignUp} from '../../Services/AuthService'

function Signup() {
  const handleFormSubmit = async (formValues) => {
    console.log("formvaluesssss", formValues);

    const parameters = {
      username: formValues.username,
      password: formValues.password,
    };

    console.log("parametersss", parameters);

    try {
      const response = await SignUp(parameters);
      console.log("signupResponse", response);
    } 
    catch (error) {
      console.log('error',error);
    }
  };
  return (
    <div>
      <SignupForm handleFormSubmit={handleFormSubmit}/>
    </div>
  )
}

export default Signup
