import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pIncrement } from '../Features/bonusSlice'

function Bonus() {
    const bonus=useSelector(state=>state.bonus.point)
    const dispatch=useDispatch()
  return (
    <div>
        <h3>Bonus Component</h3>
        <h1 style={{color:'yellow'}}>Total Point:{bonus}</h1>
        <button onClick={()=>dispatch(pIncrement())}>Increment</button>
    </div>
  )
}

export default Bonus;