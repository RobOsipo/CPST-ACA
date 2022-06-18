import React, { useState } from "react";

import classes from "./Dictionary.module.scss";

const Dictionary = () => {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSubmit = () => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => response.json())
      .then((data) => {
        setDefinition(data[0].meanings[0].definitions[0].definition);
      })
      .catch((err) => console.log("dictionary fucked up", err));
  };

  return (
    <div className={classes["dictionary-container"]}>
      <h3 className={classes.title}>
        Unsure about a word? We got you covered!
      </h3>
      <input
        className={classes.input}
        type="text"
        onChange={(e) => setWord(e.target.value)}
      />
      {definition && <p className={classes.definition}>{definition}</p>}
      <button className={classes.searchButton} onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};

export default Dictionary;
