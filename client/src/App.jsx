import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World</h1>
      <h1>Hello World by Jidnesh</h1>
      <p>Here is the value of count {count}</p>
    </>
  )
}

export default App
