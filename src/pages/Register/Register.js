import React from 'react'
import FormInput from '../../SharedComponents/FormInput/FormInput'
import classes from './Register.module.css'
const Register = () => {
  return (
    <div className={classes['main-container']}>
        <h1>Register Page</h1>
        <FormInput navigateTo="/login" buttonText="Register" linkTo="/login" linkText="I am already registered!" />

    </div>
  )
}

export default Register