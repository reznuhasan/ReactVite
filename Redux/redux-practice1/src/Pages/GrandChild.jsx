import React, { useContext } from 'react'
import { valueContext } from '../App'

function GrandChild() {
    const {dispatch}=useContext(valueContext)
  return (
    <div>
        <button type='button' onClick={()=>dispatch({type:"Increment",value:1})}>Increment</button>
        <button type='button' onClick={()=>dispatch({type:"Decrement",value:1})}>Decrement</button>
    </div>
  )
}

export default GrandChild