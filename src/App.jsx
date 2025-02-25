import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleTestPageClick = () => {
    // This will be replaced with your actual test page URL
    window.location.href = 'https://xaults.com'
  }

  return (
    <div className="app-container">
      <h1>Welcome to Test Application</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <button onClick={handleTestPageClick} className="test-page-button">
          Go to Test Page
        </button>
      </div>
    </div>
  )
}

export default App
