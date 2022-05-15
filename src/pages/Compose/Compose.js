import React from 'react'

import ComposeForm from './localComponents/ComposeForm/ComposeForm'
import classes from './Compose.module.scss'

const Compose = () => {
  return (
    <div className={classes['main-container']}>
        <ComposeForm />
    </div>
  )
}

export default Compose