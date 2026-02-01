import { useState } from "react";
import Button from "../Buttons/Button";

function Feedback() {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback submitted");
    setFeedback("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Feedback</h2>

      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Your feedback"
      />

      <Button type="submit" text="Send Feedback" />
    </form>
  );
}

export default Feedback;
