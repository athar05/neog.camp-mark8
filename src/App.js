import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🍇": "Grapes",
  "🍉": "Melon",
  "🍌": "Banana",
  "🥭": "Mango",
  "🍓": "Strawberry",
  "🍅": "Tomato",
  "🥥": "Coconut",
  "🥑": "Avocado",
  "🍆": "Eggplant",
  "🥕": "Carrot",
  "🍄": "Mushroom"
};

var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Not Found";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Food Emoji Detector </h1>
      <input onChange={emojiHandler} />

      <h2> Meaning {meaning}</h2>

      <h3> Emojis We Know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
