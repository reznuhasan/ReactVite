
import { useState } from 'react'
import './App.css'
import Button from './Components/Button/Button'

function App() {
  const [message,setMessage]=useState('')
  const [count,setCount]=useState(0)
  const Increment=()=>{
    setCount(count+parseInt(message))
  }
  const decrement=()=>{
    setCount(count-parseInt(message))
  }
  const handleInput=(e)=>{
    setMessage(e.target.value)
  }
  return (
    <>
     <h1>Count:{count}</h1>
     <input type="number" name="" id="" onChange={handleInput}/>
     <Button Increment={Increment}>Increment</Button>
     <Button decrement={decrement}>Decrement</Button>
    </>
  )
}

export default App
