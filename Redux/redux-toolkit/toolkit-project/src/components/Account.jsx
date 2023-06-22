import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, increseByValue } from '../Features/accountSlice';

function Account() {
    const {count}=useSelector(state=>state.account)
    const dispatch=useDispatch();
    const [value,setValue]=useState("0")
    const changedValue=(e)=>{
        setValue(e.target.value)
    }
   const handleValue=()=>{
   dispatch(increseByValue(parseInt(value)))
   setValue("0")
   }
  return (
    <div>
        <h3>Account Component</h3>
        <h1 style={{color:'yellow'}}>Amount:{count}</h1>
        <button onClick={()=>dispatch(increment())}>Increment+</button>
        <button onClick={()=>dispatch(decrement())}>Decrement-</button>
        <input type="text" value={value} onChange={changedValue}/>
        <button onClick={handleValue}>Increment By {value} +</button>
    </div>
  )
}

export default Account