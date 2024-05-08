import { useState } from 'react'
import reactLogo from './assets/react.svg'
import axios from "axios"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>v.1 ...... 16:33.........08/05/2024</h1>
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
        <button onClick={() => {console.log("inside button click");
                               //axios.get('http://localhost:5173/xxmessage').then((response) => {    // "/api"     
                               axios.get('/apiproxy/xxmessage').then((response) => {    // "/api"  
                                          console.log(" / xxmessage response data = ",response.data)    
                                          //setLegend(response.data);     
                                                                          }
                                        )               
                               }


        }>
          TheClick
        </button>
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