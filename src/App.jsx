import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import jeremyImage from './assets/image-jeremy.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Person />
    </>
  )
}

export default App

const Person = () => {
  return (
    <div className='person-info'>
      <div>
        <img src={jeremyImage} alt="image-jeremy" />
        <p>Report for</p>
        <span className='name'>Jeremy Robson</span>
      </div>

      <div>
        <span>Daily</span>
        <span>Weekly</span>
        <span>Mothly</span>
      </div>
    </div>
  )
}

const timeTrack = () => {
  return
}