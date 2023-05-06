import { useCallback, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './Components/title'
import ShowCounter from './Components/ShowCounter'
import Button from './Components/Button'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  
  const incrementByOne=useCallback(()=>{
    setCount1((preCount)=>preCount+1)
  },[])
  const incrementByFive=useCallback(()=>{
    setCount2((preCount)=>preCount+5)
  },[])
  const isEvenOdd=useMemo(()=>{
   let i=0;
   while(i<100000){i+=1}
   return count1%2===0
  },[count1])
  return (
    <>
    <Title></Title>  
    <ShowCounter count={count1}></ShowCounter>
    <Button handleClick={incrementByOne}>Button 1</Button>
    <span>{isEvenOdd?'Even' : 'Odd' }</span>
    <hr />
    <ShowCounter count={count2}></ShowCounter>
    <Button handleClick={incrementByFive}>Button 2</Button>

    </>
  )
}

export default App
