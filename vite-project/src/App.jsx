import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Login />
    </div>
  )
}

export default App
