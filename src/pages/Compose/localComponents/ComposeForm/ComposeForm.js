import React, {useState} from 'react'

import classes from './ComposeForm.module.scss'

const ComposeForm = () => {
    const [titleInput, setTitleInput] = useState('')
    const [contentInput, setContentInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }
  
  return (
    <div className={classes['form-container']}>
        <form className={classes.form}>
        
        <label className={classes.label} htmlFor="title">Title</label>
        <input name="title" id="title" className={classes.input} onChange={(e) => setTitleInput(e.target.value)} />

        <label className={classes.label} htmlFor="content">Write your Post!</label>
        <textarea rows="20" cols="100" name="content" id="content" className={classes.textarea} onChange={(e) => setContentInput(e.target.value)} />

        <button className={classes.button} type="submit" onSubmit={(e) => handleSubmit(e)}>Post It!</button>
        </form>
    </div>
  )
}

export default ComposeForm