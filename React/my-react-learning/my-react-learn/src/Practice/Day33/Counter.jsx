import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>Count: {count}</h2>

      <div className="counter-buttons">
        <button
          className="btn-plus"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>

        <button
          className="btn-minus"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>

        <button
          className="btn-reset"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
