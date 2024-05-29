import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RatingLists from './RatingLists'

function App() {
  const [count, setCount] = useState(0)
  const ratings = [
    {
        "name": "John Doe",
        "content": "Nice thing!",
        "rate": 5,
    },
    {
      "name": "Jane Doe",
      "content": "Good thing!",
      "rate": 4,
    },
    {
      "name": "Jane Eyre",
      "content": "Mid!",
      "rate": 3,
    }
  ]
  return (
    <>
      <div>
        <RatingLists ratings={ratings } />
      </div>
      
    </>
  )
}

export default App
