import { useState } from "react";
import "./ControlledInput.css";

function ControlledInput() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Entered name: ${name}`);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default ControlledInput;
