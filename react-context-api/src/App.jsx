
import { useState } from 'react'
import './App.css'
import MyComponents from './Components/MyComponents'

function App() {
  const [show,setShow]=useState(true)
  return (
    <>
    {(show)?<MyComponents></MyComponents>:""}
    <button type="button" onClick={()=>(show)?setShow(false):setShow(true)}>
      control component
    </button>
    </>
  )
}

export default App
