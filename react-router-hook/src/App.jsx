import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>¡Hola Mundo!</h1>
      <h2>Somos Educacion IT</h2>
      <button className='btn btn-primary'>Click Me!</button>
    </>
  )
}

export default App
