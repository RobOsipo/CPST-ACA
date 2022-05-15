import React from 'react'
import Logostache from '../../../../icons/LogoStache/LogoStache'
import classes from './LogoDrop.module.scss'
const Hello = () => {
  return (
    <div className={classes['hello-container']}>
        <div className={classes.display}>
            
         <div className={classes['bump-in']}> <Logostache width={300} height={300} customClass="white-logo" /> </div> 


        </div>

        
    </div>
  )
}

export default Hello