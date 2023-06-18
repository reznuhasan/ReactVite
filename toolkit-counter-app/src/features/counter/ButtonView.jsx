import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increaseByValue, increment, reset } from './counterSlice';

function ButtonView() {
    const dispatch=useDispatch();

    const inputRef=useRef(null)
    const handleIncrease=(e)=>{
      const inputStringValue=inputRef.current.value;
      const inputValue=parseInt(inputStringValue);
      dispatch(increaseByValue(inputValue))
      inputRef.current.value=null
    }
  return (
    <div>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>decrement</button>
        <button onClick={()=>dispatch(reset())}>reset</button>
        <br /> <br />
        <input type="text" placeholder='enter your number' ref={inputRef}/>
        <button onClick={handleIncrease}>Increase By Value</button>
       

    </div>
  )
}

export default ButtonView