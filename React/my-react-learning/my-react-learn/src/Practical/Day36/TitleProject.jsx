import { useState, useEffect } from "react";
import "./title.css";

function TitleProject() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicks: ${count}`;
  }, [count]);

  return (
    <div className="container">
      <div className="card">
        <h2>Document Title Counter</h2>
        <p className="number">{count}</p>
        <button onClick={() => setCount(count + 1)}>
          Click Me
        </button>
      </div>
    </div>
  );
}

export default TitleProject;