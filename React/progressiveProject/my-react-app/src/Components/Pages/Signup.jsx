import { useState } from "react";
import Button from "../Buttons/Button";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>

      <input name="name" placeholder="Name" value={user.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={user.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} />

      <Button type="submit" text="Sign Up" className="secondary" />
    </form>
  );
}

export default Signup;
