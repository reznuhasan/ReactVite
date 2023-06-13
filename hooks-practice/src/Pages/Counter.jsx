import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0);
   
  return (
    <div>
        {count}
        <p>
            <button onClick={()=>setCount((prevState)=>prevState+1)}>Add 1</button>
            <button onClick={()=>setCount((prevState)=>prevState+5)}>Add 5</button>
        </p>
    </div>
  )
}

export default Counter