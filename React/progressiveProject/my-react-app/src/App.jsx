import "./Components/styles/App.css";

import User from "./Components/User";
import Child from "./Components/Child";
import Button from "./Components/Buttons/Button";
import Layout from "./Components/Layouts/Layout";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <Layout>
      <User name="Surendhiran" />

      <h1>Welcome to my App</h1>

      <p>
        Set up a React development environment, Understand how files connect,
        Write JSX confidently, Prepare for components & props
      </p>

      <Child message="This message is passed as a prop!" />

      <div className="actions">
        <Button className="primary" text="Login" />
        <Button className="secondary" text="SignUp" />
      </div>

      {/* Example of Home Page usage */}
      <Home />
    </Layout>
  );
}

export default App;
