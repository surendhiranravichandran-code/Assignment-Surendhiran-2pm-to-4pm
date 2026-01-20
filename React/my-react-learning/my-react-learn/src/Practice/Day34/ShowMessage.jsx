import { useState } from "react";
import "./ShowMessage.css";

function ShowMessage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="box">
      <h2>Login Status</h2>

      {isLoggedIn && <p className="success">You are logged in</p>}

      <button onClick={() => setIsLoggedIn(true)}>Login</button>
      <button onClick={() => setIsLoggedIn(false)}>Logout</button>
    </div>
  );
}

export default ShowMessage;
