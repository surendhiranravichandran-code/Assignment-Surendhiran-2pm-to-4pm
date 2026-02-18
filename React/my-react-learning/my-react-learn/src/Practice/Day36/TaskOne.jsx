import { useEffect } from "react";

function TaskOne() {
  useEffect(() => {
    console.log("Component Mounted");
  }, []);     //  Empty dependency array

  return <h2>Check Console</h2>;
}

export default TaskOne;