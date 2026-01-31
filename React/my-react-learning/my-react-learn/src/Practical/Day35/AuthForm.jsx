import { useState } from "react";
import "./AuthForm.css";

function AuthForm() {
  const loginInitial = { email: "", password: "" };
  const registerInitial = { name: "", email: "", password: "" };

  const [loginData, setLoginData] = useState(loginInitial);
  const [registerData, setRegisterData] = useState(registerInitial);

  const [loginErrors, setLoginErrors] = useState({});
  const [registerErrors, setRegisterErrors] = useState({});

  const handleChange = (e, type) => {
    const { name, value } = e.target;

    if (type === "login") {
      setLoginData({ ...loginData, [name]: value });
    } else {
      setRegisterData({ ...registerData, [name]: value });
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (!loginData.email) errors.email = "Email required";
    if (!loginData.password) errors.password = "Password required";

    if (Object.keys(errors).length) {
      setLoginErrors(errors);
      return;
    }

    alert("Login Data:\n" + JSON.stringify(loginData, null, 2));
    setLoginData(loginInitial);
    setLoginErrors({});
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (!registerData.name) errors.name = "Name required";
    if (!registerData.email) errors.email = "Email required";
    if (registerData.password.length < 6)
      errors.password = "Min 6 characters";

    if (Object.keys(errors).length) {
      setRegisterErrors(errors);
      return;
    }

    alert("Register Data:\n" + JSON.stringify(registerData, null, 2));
    setRegisterData(registerInitial);
    setRegisterErrors({});
  };

  return (
    <div className="container">
      {/* Login */}
      <form className="form" onSubmit={handleLoginSubmit}>
        <h3>Login</h3>

        <input
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={(e) => handleChange(e, "login")}
        />
        {loginErrors.email && <p className="error">{loginErrors.email}</p>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) => handleChange(e, "login")}
        />
        {loginErrors.password && (
          <p className="error">{loginErrors.password}</p>
        )}

        <button type="submit">Login</button>
      </form>

      {/* Register */}
      <form className="form" onSubmit={handleRegisterSubmit}>
        <h3>Register</h3>

        <input
          name="name"
          placeholder="Name"
          value={registerData.name}
          onChange={(e) => handleChange(e, "register")}
        />
        {registerErrors.name && (
          <p className="error">{registerErrors.name}</p>
        )}

        <input
          name="email"
          placeholder="Email"
          value={registerData.email}
          onChange={(e) => handleChange(e, "register")}
        />
        {registerErrors.email && (
          <p className="error">{registerErrors.email}</p>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={registerData.password}
          onChange={(e) => handleChange(e, "register")}
        />
        {registerErrors.password && (
          <p className="error">{registerErrors.password}</p>
        )}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default AuthForm;
