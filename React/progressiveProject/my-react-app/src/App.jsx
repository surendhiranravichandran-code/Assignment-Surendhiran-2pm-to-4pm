import './App.css'
import child from './child'  // import the child component
import User from "./User";
import Button from './Button';
import Layout from './Layout';




function App() {
  const msg = "Welcome to my App"
  const childMsg = "This message is passed as a prop!"
   

  return (
    <>
    <Layout>
    <div>
       <User name="Surendhiran" />
      <h1>{msg}</h1>
      <p>
        Set up a React development environment, Understand how files connect, Write JSX confidently, Prepare for components & props
      </p>
      <child message={childMsg} />
    </div>
     <div className="actions">
     <Button  className="btn primary" text="Login"/>
     <Button className="btn secondary"  text="SignUp"/>
     </div>
     </Layout>
    </>
  )
}

export default App
