import { useState } from "react";
import "./LoginStatus.css";

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="container">
      {/* Status */}
      <div className={`status ${isLoggedIn ? "logged-in" : "logged-out"}`}>
        {isLoggedIn ? "Logged In" : "Logged Out"}
      </div>

      {/* Message using ternary operator */}
      <p className="message">
        {isLoggedIn
          ? "Welcome back! You are successfully logged in 🎉"
          : "You are currently logged out. Please log in to continue."}
      </p>

      {/* Buttons */}
      <button className="login-btn" onClick={() => setIsLoggedIn(true)}>
        Login
      </button>

      <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>
        Logout
      </button>
    </div>
  );
}

export default LoginStatus;
