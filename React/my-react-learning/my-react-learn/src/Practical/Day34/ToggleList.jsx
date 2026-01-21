import { useState } from "react";

function ToggleList() {
  const [show, setShow] = useState(true);
  const skills = ["React", "JavaScript", "Java", "Spring Boot"];

  return (
    <div className="container">
      <h2>Toggle List</h2>

      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Skills
      </button>

      {show && (
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ToggleList;
