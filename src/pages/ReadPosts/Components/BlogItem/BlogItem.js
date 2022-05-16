import React, { useState } from "react";

import classes from "./BlogItem.module.scss";

const BlogItem = ({ title, content }) => {
  const [expand, setExpand] = useState(false);

  const deleteClickHandler = () => {
    // Fetch req goes here, method DELETE endpoint is title
  };

  const displayContent = () => {
    return (
      <div className={classes["content-container"]}>
        <p>{content}</p>
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
