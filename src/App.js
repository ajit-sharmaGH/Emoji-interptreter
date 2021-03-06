import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "π": "Smiling Face with Smiling Eyes",
  "π": "Slightly Smiling Face",
  "π": "Smiling Face with Hallo",
  "π": "Winking Face",
  "π₯°": "Smiling Face with Hearts",
  "π": "Smiling Face with Heart-Eyes",
  "π": "Face with Tears of Joy",
  "π": "Grinning Face with Sweat",
  "π": "Grinning Squinting Face",
  "π": "Grinning Face with Big Eyes",
  "π": "Grinning Face with Smiling Eyes",
  "π": "Beaming Face with Smiling Eyes",
  "π": "Upside-Down Face",
  "π²": "Astonished Face",
  "π§": "Face with Monocle"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];
    // key inside object
    // if(inputEmoji in dictionary)
    // if (meaning === undefined) {
    //   meaning = "Oops! Something went wrong.";
    // }
    // console.log(meaning)
    setMeaning(meaning);
  }

  //i will catch you if you will copy my code.ππ
  // var [userInput, setUserInput] = useState("");

  // function inputChangehandler(event) {
  //   //console.log(event.target);
  //   console.log(event.target.value);
  //   setUserInput(event.target.value);
  // }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>β€οΈEmoji Interpreterβ€οΈ</h1>

      <input onChange={emojiInputHandler} />
      <h2>{meaning}</h2>
      <h3>click the following emojies to know there meaning.</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
            {emoji}
          </span>
        );
      })}

      <div id="footer">
        <p> Made with LOVE by AJIT SHARMA. </p>
      </div>
    </div>
  );
}
