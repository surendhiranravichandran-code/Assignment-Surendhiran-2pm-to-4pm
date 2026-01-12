import './App.css'
import child from './child'  // import the child component

function App() {
  const msg = "Welcome to my App"
  const childMsg = "This message is passed as a prop!"

  return (
    <div>
      <h1>{msg}</h1>
      <p>
        Set up a React development environment, Understand how files connect, Write JSX confidently, Prepare for components & props
      </p>
      <child message={childMsg} />
    </div>
  )
}

export default App
