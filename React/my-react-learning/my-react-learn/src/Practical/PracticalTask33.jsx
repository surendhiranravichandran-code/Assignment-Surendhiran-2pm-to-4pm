import { useState } from "react";
import "./Day33/PracticalTask33.css";

function PracticalTask33() {
  // 1. Click Counter
  const [count, setCount] = useState(0);

  // 2. Show / Hide Profile
  const [showProfile, setShowProfile] = useState(false);

  // 3. Input Preview
  const [inputValue, setInputValue] = useState("");

  // 4. Toggle Light / Dark Theme
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`day33-container ${darkMode ? "dark-page" : "light-page"}`}>
      <h1>Day 33 Practical Tasks</h1>

      {/* Click Counter */}
      <h2>Counter: {count}</h2>
      <div className="button-group">
        <button className="btn plus" onClick={() => setCount(count + 1)}>+</button>
        <button className="btn minus" onClick={() => setCount(count - 1)}>-</button>
        <button className="btn reset" onClick={() => setCount(0)}>Reset</button>
      </div>

      <hr />

      {/* Show / Hide Profile */}
      <button className="btn toggle" onClick={() => setShowProfile(!showProfile)}>
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>
      {showProfile && <p className="profile">Name: Surendhiran</p>}

      <hr />

      {/* Input Preview */}
      <input
        type="text"
        className="input-box"
        placeholder="Type here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>You typed: <strong>{inputValue}</strong></p>

      <hr />

      {/* Theme Toggle */}
      <button className="btn theme-btn" onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme
      </button>
      <p className="theme-text">
        {darkMode ? "Dark Mode" : "Light Mode"}
      </p>
    </div>
  );
}

export default PracticalTask33;
