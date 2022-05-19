import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import cookie from "cookie";
import classes from "./BlogItem.module.scss";

const BlogItem = ({ id, title, content, imageUrl, creator }) => {
  const [expand, setExpand] = useState(false);
  const [deleteMsg, setDeleteMsg] = useState("");
  const cookies = cookie.parse(document.cookie);

  const navigate = useNavigate();

  const deleteClickHandler = () => {
    //! REST implementation
    fetch(`http://localhost:5000/feed/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookies["Token"]}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDeleteMsg(data.message);
        return <Navigate to={"/read"} replace />;
      })
      .catch((err) => console.log("failed to delete", err));

    return <Navigate to={"/read"} replace />;

    // ! GraphQL implementation
    // const graphqlDeleteQuery = {
    //     query: `
    //         mutation {
    //             deletePost(id: "${id}")
    //         }
    //     `
    // }

    // fetch(`http://localhost:5000/graphql`, {
    //     method: 'DELETE',
    //     body: JSON.stringify(graphqlDeleteQuery),
    //     headers: {
    //         'Content-Type': 'application/json'

    //     }
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data)
    //     setDeleteMsg(data.message)
    //     return <Navigate to={"/read"} replace />

    // })
    // .catch(err => console.log('failed to delete', err))
  };

  const displayContent = () => {
    return (
      <div className={classes["content-container"]}>
        <p className={classes.content}>{content}</p>
        <img className={classes.image} src={imageUrl} alt={title} />
        <p className={classes.creator}>Created By: {creator}</p>
        <div className={classes["close-and-delete"]}>
          <button
            className={classes.closeButton}
            onClick={() => setExpand(false)}
          >
            Close Content
          </button>
          <button className={classes.deleteButton} onClick={deleteClickHandler}>
            Delete This Post
          </button>
        </div>
      </div>
    );
  };

  return (
    <li className={classes.post}>
      <h3 className={classes.title}>{title}</h3>
      {!expand && (
        <button className={classes.openButton} onClick={() => setExpand(true)}>
          Read more here!
        </button>
      )}
      {expand && displayContent()}
    </li>
  );
};

export default BlogItem;
