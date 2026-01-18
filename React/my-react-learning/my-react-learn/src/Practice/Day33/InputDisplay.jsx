import { useState } from "react";
import "./InputDisplay.css";

function InputDisplay() {
  const [text, setText] = useState("");

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>You typed: {text}</p>
    </div>
  );
}

export default InputDisplay;
