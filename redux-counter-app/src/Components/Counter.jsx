import React from 'react'
import Calculator from './Calculator'
import { useDispatch, useSelector } from 'react-redux'
import store from '../store'

function Counter() {
    const count=useSelector((state)=>state.count)
  return (
    <div>
        <h1>Count:{count}</h1>
        <Calculator/>
    </div>
  )
}

export default Counter