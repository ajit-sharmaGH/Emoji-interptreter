import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling Face with Smiling Eyes",
  "🙂": "Slightly Smiling Face",
  "😇": "Smiling Face with Hallo",
  "😉": "Winking Face",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "😂": "Face with Tears of Joy",
  "😅": "Grinning Face with Sweat",
  "😆": "Grinning Squinting Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "🙃": "Upside-Down Face",
  "😲": "Astonished Face",
  "🧐": "Face with Monocle",
  "😭": "Extreme Pain",
  "🫣": "Noisy",
  "😎": "Bhaukaal",
  "🙏": "Radhe Radhe (Namaste)",
  "🥳": "Feeling Khoosh ",
  "😐": "Suspected trauma",
  "👋": "Bye, see you soon !",
  "💪": "Chacha hmre Vidhayak hain "
};

var emojiWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    setMeaning(meaning);
  }
  //i will catch you if you will copy my code.😂😂
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <span>❤️Emoji Interpreter❤️</span>
      <input onChange={emojiInputHandler} />
      <p>{"< < < Emoji Expressions > > >"}</p>
      <h2>{meaning}</h2>
      <h3>Click the following emojies to know there meaning.</h3>
      <div>
        {emojiWeKnow.map(function (emoji) {
          return (
            <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
              {emoji}
            </span>
          );
        })}
      </div>
      <p>
        Made with LOVE ❤️ by <mark>AJIT SHARMA</mark>{" "}
      </p>
    </div>
  );
}
