import { useState } from 'react'
import reactLogo from './assets/react.svg'
import axios from "axios"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>v.4 ...... 16:03.........11/05/2024</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        //
        // button click removed to ReadMeRDM_vr16
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
