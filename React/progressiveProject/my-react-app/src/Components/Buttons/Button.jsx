import { useState } from "react";
import "./Button.css";

function Button({
  text,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  children
}) {
  const [clicks, setClicks] = useState(0);

  const handleClick = (e) => {
    setClicks((prev) => prev + 1);
    onClick && onClick(e);
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`btn ${className}`}
      onClick={handleClick}
    >
      {children || text} ({clicks})
    </button>
  );
}

export default Button;
