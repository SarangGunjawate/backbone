import React from 'react'
import SigninForm from '../Auth/SigninForm'
import { login } from '../../Services/AuthService'
import { saveAccessToken } from '../../Utils/Helper'

function Signin() {
  console.log('start')
  const handleLogin = async (userDetails) => {
    console.log('userdetails', userDetails)
    try {
      const response = await login(userDetails);
      console.log('ssssss')

      console.log('response', response)

      if (response.status === 200) {
        saveAccessToken(response.data.access);
        console.log('res',response.data.access)
      } else {
        console.log('error',response.error.message);
      }
    } catch (err) {
      // const {
      //   response: {
      //     data: { error },
      //   },
      // } = err;
      console.log('err', err)
    }
  };
  console.log('end')
  return (
    <div>
      <SigninForm submitDetails={handleLogin} />
    </div>
  )
}

export default Signin
