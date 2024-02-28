import { useState } from 'react'
import './App.css'
import { Person } from './Components'
import { TimeTrack } from './Components'

function App() {
  return (
    <div className='app-container'>
      <Person />
      <TimeTrack />
    </div>
  )
}

export default App;