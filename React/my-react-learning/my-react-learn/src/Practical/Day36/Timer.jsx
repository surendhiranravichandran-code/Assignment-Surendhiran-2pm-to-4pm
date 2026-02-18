import { useState, useEffect } from "react";
import "./timer.css";

function TimerProject() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h2>Timer</h2>
        <p className="number">{time}s</p>
      </div>
    </div>
  );
}

export default TimerProject;