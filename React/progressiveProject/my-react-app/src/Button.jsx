import { useState } from "react";
import "./Button.css";

function Button({ text, className }) {
  const [clicks, setClicks] = useState(0);

  return (
    <button
      className={`btn ${className}`}
      onClick={() => setClicks(clicks + 1)}
    >
      {text} ({clicks})
    </button>
  );
}

export default Button;
