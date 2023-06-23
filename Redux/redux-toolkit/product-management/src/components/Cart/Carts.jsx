import React from 'react'
import { useSelector } from 'react-redux'

function Carts() {
  const items=useSelector(state=>state.items.items)
  console.log(items)
  return (
    <div>
        <h1>Carts</h1>
    </div>
  )
}

export default Carts