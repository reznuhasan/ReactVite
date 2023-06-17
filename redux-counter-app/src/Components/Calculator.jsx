import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { decrementCounter, incrementByValueCounter, incrementCounter, resetCounter } from '../Services/Actions/counterAction';

function Calculator() {
    const dispatch=useDispatch();
    const inputRef=useRef(null)
    const handleClick=()=>{
        const inputValue=inputRef.current.value;
        dispatch(incrementByValueCounter(parseInt(inputValue)))
        inputRef.current.value=null;
    }
  return (
    <div>
        <button onClick={()=>dispatch(incrementCounter())}>Increment</button>
        <button onClick={()=>dispatch(decrementCounter())}>Decrement</button>
        <button onClick={()=>dispatch(resetCounter())}>Reset</button>
        <br /><br />
        <input type="text" placeholder='enter your value' ref={inputRef}/>
        <button onClick={handleClick}>Increment By Value</button>
    </div>
  )
}

export default Calculator