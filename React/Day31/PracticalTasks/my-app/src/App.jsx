import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const name ="Surendhiran Ravichandran";

  useEffect(()=>{
     document.title="React App"
  },[])

  return (
    <div>
      <h1>My name is {name}</h1>
      <p>Vite is running successfully</p>
     
    </div>
  )
}

export default App
