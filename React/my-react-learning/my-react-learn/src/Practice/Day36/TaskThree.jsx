import { useEffect, useState } from "react";

function TaskThree() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    // Cleanup
    return () => {
      clearInterval(timer);
      console.log("Timer cleared");
    };
  }, []);

  return <h2>Timer: {seconds}</h2>;
}

export default TaskThree;