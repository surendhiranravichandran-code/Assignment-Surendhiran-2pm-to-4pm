import { useState } from "react";
import "./ChangeButtonText.css";

function ChangeButtonText() {
  const [btnText, setBtnText] = useState("Click Me");

  const handleClick = () => {
    setBtnText(
      btnText === "Click Me" ? "Clicked!" : "Click Me"
    );
  };

  return (
    <div className="btn-text-container">
      <button onClick={handleClick}>
        {btnText}
      </button>
    </div>
  );
}

export default ChangeButtonText;
