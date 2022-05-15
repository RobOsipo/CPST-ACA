import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import MainNavigation from '../../SharedComponents/MainNavigation/MainNavigation'
import DisplayModal from '../../SharedComponents/DisplayModal/DisplayModal'
import WordGame from './localComponents/WordGame/WordGame'

import classes from './Choose.module.scss'

const Choose = () => {
    const [showModal, setShowModal] = useState(false);

    const modalClickOn = () => {
      setShowModal(true)
    }


  return (
    <section className={classes['main-container']} >
        <MainNavigation />
        {showModal && <DisplayModal setShowModal={setShowModal} showModal={showModal} component={WordGame} />}
        <section className={classes['choice-container']}>
           <Link className={classes.link} to="/notes"> <div className={`${classes.box} ${classes.one}`}>Compose A New Post!</div> </Link>
           <Link className={classes.link} to="/search-for-images"> <div className={`${classes.box} ${classes.two}`}>Let's See My Blogs!</div></Link>
           <div className={classes.link} onClick={modalClickOn} > <div className={`${classes.box} ${classes.three}`}>Test My Typing Ability!</div></div>
        </section>
    </section>
  )
}

export default Choose