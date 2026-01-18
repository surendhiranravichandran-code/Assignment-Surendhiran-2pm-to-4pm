import { useState } from "react";
import "./ToggleText.css";

function ToggleText() {
  const [showText, setShowText] = useState(true);

  return (
    <div className="toggle-container">
      <button
        className="toggle-btn"
        onClick={() => setShowText(!showText)}
      >
        Toggle Text
      </button>

      {showText && (
        <p className="toggle-text">This text can be toggled</p>
      )}
    </div>
  );
}

export default ToggleText;
