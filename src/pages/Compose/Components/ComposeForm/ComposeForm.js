import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import DisplayModal from "../../../../SharedComponents/DisplayModal/DisplayModal";
import Dictionary from "./localComponents/Dictionary/Dictionary";

import cookie from "cookie";
import classes from "./ComposeForm.module.scss";

const ComposeForm = () => {
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [creatorInput, setCreatorInput] = useState({ name: "" });
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const modalClickOn = () => {
    setShowModal(true);
  };

  const handleClick = () => {
    // ! REST API implementation

    const body = {
      title: titleInput,
      content: contentInput,
      imageUrl: imageInput,
      creator: creatorInput,
    };

    const cookies = cookie.parse(document.cookie);

    fetch("https://social-media-rest.vercel.app/feed/posts", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies["Token"]}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data from post--", data);
        dispatch({ type: "FLIPFLAG" });
        return navigate("/read", { replace: true });
      })
      .catch((err) => console.log(".catch block of Create Post", err));

    // ! GraphQL implementation
    // const graphqlCreatePostQuery = () => {
    //   query: `
    //       mutation {
    //         createPost(postInput: {title: "${titleInput}", content: "${contentInput}", imageUrl: "${imageInput}", creator: "${creatorInput}"}) {
    //           _id
    //           title
    //         }
    //       }
    //       `;
    // };

    // fetch("http://localhost:5000/graphql", {
    //   method: "POST",
    //   body: JSON.stringify(graphqlCreatePostQuery),
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("data from post--", data);
    //     return navigate("/read", { replace: true });
    //   })
    //   .catch((err) => console.log(".catch block of Create Post", err));
  };

  return (
    <>
      <DisplayModal
        setShowModal={setShowModal}
        showModal={showModal}
        component={Dictionary}
      />
      <div className={classes["form-container"]}>
        <button onClick={modalClickOn} className={classes.openDictionary}>
          Need help with a word? Click Me!
        </button>

        <label className={classes.label} htmlFor="title">
          <span>Title</span>
        </label>
        <input
          name="title"
          id="title"
          className={classes.input}
          onChange={(e) => setTitleInput(e.target.value)}
        />

        <label className={classes.label} htmlFor="title">
          <span>Image URL</span>
        </label>
        <input
          name="title"
          id="title"
          className={classes.input}
          onChange={(e) => setImageInput(e.target.value)}
        />

        <label className={classes.label} htmlFor="title">
          <span> Created By</span>
        </label>
        <input
          name="title"
          id="title"
          className={classes.input}
          onChange={(e) => setCreatorInput({ name: e.target.value })}
        />

        <label className={classes.label} htmlFor="content">
          <span>Write your Post!</span>
        </label>
        <textarea
          rows="20"
          cols="100"
          name="content"
          id="content"
          className={classes.textarea}
          onChange={(e) => setContentInput(e.target.value)}
        />

        <button className={classes.button} onClick={() => handleClick()}>
          Post It!
        </button>
      </div>
    </>
  );
};

export default ComposeForm;
