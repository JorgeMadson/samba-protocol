import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Connect from "./components/Connect";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Samba Protocol</h1>
        <p>Beats like the heart of the whole country</p>
        <Connect />
      </header>
    </div>
  )
}

export default App
