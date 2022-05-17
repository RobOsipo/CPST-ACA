import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

import DisplayModal from '../../../../SharedComponents/DisplayModal/DisplayModal'
import Dictionary from './localComponents/Dictionary/Dictionary'

import cookie from 'cookie'
import classes from './ComposeForm.module.scss'

const ComposeForm = () => {
    const [titleInput, setTitleInput] = useState('')
    const [contentInput, setContentInput] = useState('')
    const [imageInput, setImageInput] = useState('')
    const [creatorInput, setCreatorInput] = useState('')
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate()

    const modalClickOn = () => {
      setShowModal(true)
    }

    const handleClick = (e) => {
        // e.preventDefault()

       const body = {
            title: titleInput,
            content: contentInput,
            imageUrl: imageInput,
            creator: creatorInput
        }

        const cookies = cookie.parse(document.cookie);
      

        fetch('http://localhost:5000/feed/posts', {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json', 
            'Authorization': 'Bearer ' + cookies['Token'] 
          }
        })
          .then(response => response.json())
          .then(data => {
            console.log('data from post--', data)
            return navigate("/read", {replace: true})
          })
          .catch(err => console.log('.catch block of Create Post', err))
    }
  
  return (
      <>
    <DisplayModal setShowModal={setShowModal} showModal={showModal} component={Dictionary} />
    <div className={classes['form-container']}>
        <button onClick={modalClickOn} className={classes.openDictionary}>Need help with a word? Click Me!</button>
        {/* <form className={classes.form}> */}
        
        <label className={classes.label} htmlFor="title">Title</label>
        <input name="title" id="title" className={classes.input} onChange={(e) => setTitleInput(e.target.value)} />

        <label className={classes.label} htmlFor="title">Image URL</label>
        <input name="title" id="title" className={classes.input} onChange={(e) => setImageInput(e.target.value)} />

        <label className={classes.label} htmlFor="title">Created By</label>
        <input name="title" id="title" className={classes.input} onChange={(e) => setCreatorInput(e.target.value)} />

        <label className={classes.label} htmlFor="content">Write your Post!</label>
        <textarea rows="20" cols="100" name="content" id="content" className={classes.textarea} onChange={(e) => setContentInput(e.target.value)} />

        <button className={classes.button} onClick={() => handleClick()}>Post It!</button>
        {/* </form> */}
    </div>
      </>
  )
}

export default ComposeForm