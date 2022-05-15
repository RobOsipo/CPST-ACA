import React from 'react'

import FormInput from '../../SharedComponents/FormInput/FormInput'


import classes from './Login.module.css'

const Login = () => {
  return (
    <div className={classes.dummy}>
        <h1>Login Page</h1>
        <FormInput navigateTo="/afterlogin" buttonText="Login" linkTo="/" linkText="I Need To Register Still!" />

    </div>
  )
}

export default Login