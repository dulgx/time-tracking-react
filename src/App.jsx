import { useState } from 'react'
import './App.css'
import { Person } from './Components'
import { timeTrack } from './Components'

function App() {
  return (
    <div className='app-container'>
      <Person />
      <timeTrack />
    </div>
  )
}

export default App