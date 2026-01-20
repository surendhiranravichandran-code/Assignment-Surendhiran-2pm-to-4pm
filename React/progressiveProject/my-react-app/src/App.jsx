import "./App.css";
import User from "./User";
import Button from "./Button";
import Layout from "./Layout";
import Child from "./child";

function App() {
  const msg = "Welcome to my App";
  const childMsg = "This message is passed as a prop!";

  return (
    <Layout>
      <User name="Surendhiran" />
      <h1>{msg}</h1>

      <p>
        Set up a React development environment, Understand how files connect,
        Write JSX confidently, Prepare for components & props
      </p>

      <Child message={childMsg} />

      <div className="actions">
        <Button className="primary" text="Login" />
        <Button className="secondary" text="SignUp" />
      </div>
    </Layout>
  );
}

export default App;
