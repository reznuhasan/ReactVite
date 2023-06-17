import React, { useRef } from 'react'
import store from '../store'
import { decrementCounter, incrementByNumberCounter, incrementCounter, resetCounter } from '../Services/actions/counterAction'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
    const inputRef=useRef(null);
    const count=useSelector(state=>state.counter)
    const dispatch=useDispatch();
    
    const handleInputValue=()=>{
        const inputValue=inputRef.current.value;
        inputRef.current.value=null;
        const value=parseInt(inputValue)
        dispatch(incrementByNumberCounter(value))
    }
  return (
    <div>
        <h1>Counter App</h1>

        <h3>Count:{count}</h3>
        <button onClick={()=>dispatch(incrementCounter())}>Increment</button>
        <button onClick={()=>dispatch(decrementCounter())}
        >Decrement</button>
        <button onClick={()=>dispatch(resetCounter())}>Reset</button>
        <br /><br />
        <input type="text" placeholder='enter number' ref={inputRef}/>
        <button onClick={handleInputValue}>Increment By Number</button>
    </div>
  )
}

export default Counter