import { useState } from 'react'
import './App.css'
import { Person } from './Components'
import { timeTrack } from './Components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app-container'>
      <Person />
      <timeTrack />
    </div>
  )
}

export default App