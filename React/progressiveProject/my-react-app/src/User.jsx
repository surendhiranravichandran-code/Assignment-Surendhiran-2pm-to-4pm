import { useState } from "react";

function User({ name }) {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Profile" : "Show Profile"}
      </button>

      {show && (
        <>
          <p>Name: {name}</p>

          <input
            type="text"
            placeholder="Type something"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <p>Preview: {message}</p>
        </>
      )}
    </div>
  );
}

export default User;
