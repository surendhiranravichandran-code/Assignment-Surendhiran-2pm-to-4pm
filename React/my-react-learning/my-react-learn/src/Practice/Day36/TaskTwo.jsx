import { useState, useEffect } from "react";

function TaskTwo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]); // Runs when count changes

  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}

export default TaskTwo;