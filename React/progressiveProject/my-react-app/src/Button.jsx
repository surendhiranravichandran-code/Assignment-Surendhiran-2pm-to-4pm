import "./Button.css";

function Button({ text, className }) {
  return (
    <button className={`btn ${className}`}>
      {text}
    </button>
  );
}

export default Button;
