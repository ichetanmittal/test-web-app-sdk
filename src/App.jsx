import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleIosTestPageClick = () => {
    window.location.href = 'iosapp://test'
  }

  return (
    <div className="app-container">
      <h1>Welcome to Test Application</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <p></p>
        <button onClick={handleIosTestPageClick} className="ios-nav-button">
          Navigate to iOS Test Page
        </button>
      </div>
    </div>
  )
}

export default App
