
import { useState } from 'react'
import './App.css'
import TemperatureInput from './Components/TemperatureInput'
import Water from './Components/Water'
import ClickCounter from './Components/ClickCounter'
import HoverCounter from './Components/HoverCounter'
import Counter from './Components/Counter'

function App() {
 
  return (
    <>
  
  
   <Counter>
    {(count,incrementCount)=>(
      <ClickCounter incrementCount={incrementCount}></ClickCounter>
    )}
   </Counter>
    
    </>
  )
}

export default App
