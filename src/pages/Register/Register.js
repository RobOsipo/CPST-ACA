
import React from 'react'
import FormInput from '../../SharedComponents/FormInput/FormInput'
import LogoDrop from './Components/LogoDrop/LogoDrop'

import classes from './Register.module.css'

const Register = () => {
    return (
      

        <div className={classes.area}>
  
        <ul className={classes.circles}>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                                  <li></li>
                          </ul>
  
          <main className={`${classes['main-container']}`}>
            <LogoDrop />
            <FormInput navigateTo="/login" buttonText="Register" linkTo="/login" linkText="I am already registered!" />
  
              
              
          </main>
  
         
        </div>
       
    )
}

export default Register