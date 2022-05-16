import React, {useState} from 'react'

import DisplayModal from '../../../../SharedComponents/DisplayModal/DisplayModal'
import Dictionary from './Components/Dictionary/Dictionary'
import classes from './ComposeForm.module.scss'

const ComposeForm = () => {
    const [titleInput, setTitleInput] = useState('')
    const [contentInput, setContentInput] = useState('')
    const [showModal, setShowModal] = useState(false);

    const modalClickOn = () => {
      setShowModal(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
  
  return (
      <>
    <DisplayModal setShowModal={setShowModal} showModal={showModal} component={Dictionary} />
    <div className={classes['form-container']}>
        <button onClick={modalClickOn} className={classes.openDictionary}>Need help with a word?</button>
        <form className={classes.form}>
        
        <label className={classes.label} htmlFor="title">Title</label>
        <input name="title" id="title" className={classes.input} onChange={(e) => setTitleInput(e.target.value)} />

        <label className={classes.label} htmlFor="content">Write your Post!</label>
        <textarea rows="20" cols="100" name="content" id="content" className={classes.textarea} onChange={(e) => setContentInput(e.target.value)} />

        <button className={classes.button} type="submit" onSubmit={(e) => handleSubmit(e)}>Post It!</button>
        </form>
    </div>
      </>
  )
}

export default ComposeForm