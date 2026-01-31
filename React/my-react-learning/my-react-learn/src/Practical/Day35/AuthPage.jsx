import { useState } from "react";
import "./AuthPage.css";

const initialLogin = { email: "", password: "" };
const initialRegister = { name: "", email: "", password: "" };

function AuthPage() {
  const [activeTab, setActiveTab] = useState("login");
  const [loginData, setLoginData] = useState(initialLogin);
  const [registerData, setRegisterData] = useState(initialRegister);
  const [output, setOutput] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e, type) => {
    const { name, value } = e.target;

    type === "login"
      ? setLoginData({ ...loginData, [name]: value })
      : setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = (e, type) => {
    e.preventDefault();
    setError("");

    const data = type === "login" ? loginData : registerData;

    //  Basic validation
    if (Object.values(data).some((val) => val.trim() === "")) {
      setError("All fields are required");
      return;
    }

    //  Show submitted data
    setOutput({ type, data });

    //  Clear form
    type === "login"
      ? setLoginData(initialLogin)
      : setRegisterData(initialRegister);
  };

  return (
    <div className="page">
      <h1 className="title">Auth Page</h1>

      <div className="card">
        {/* Tabs */}
        <div className="tabs">
          <button
            className={activeTab === "login" ? "tab active" : "tab"}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={activeTab === "register" ? "tab active" : "tab"}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>

        {/* Error */}
        {error && <p className="error">{error}</p>}

        {/* Login */}
        {activeTab === "login" && (
          <form className="form" onSubmit={(e) => handleSubmit(e, "login")}>
            <input
              name="email"
              value={loginData.email}
              onChange={(e) => handleChange(e, "login")}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={(e) => handleChange(e, "login")}
              placeholder="Password"
            />
            <button>Login</button>
          </form>
        )}

        {/* Register */}
        {activeTab === "register" && (
          <form className="form" onSubmit={(e) => handleSubmit(e, "register")}>
            <input
              name="name"
              value={registerData.name}
              onChange={(e) => handleChange(e, "register")}
              placeholder="Name"
            />
            <input
              name="email"
              value={registerData.email}
              onChange={(e) => handleChange(e, "register")}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={registerData.password}
              onChange={(e) => handleChange(e, "register")}
              placeholder="Password"
            />
            <button>Register</button>
          </form>
        )}
      </div>

      {/* Output */}
      {output && (
        <div className="output">
          <h3>{output.type.toUpperCase()} DATA</h3>
          <pre>{JSON.stringify(output.data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default AuthPage;
