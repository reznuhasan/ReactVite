import React, { useState } from "react";

const HoverCounter=()=>{
   const [count,setCount]=useState(0)
   const incrementCount=()=>{
       setCount(count+1)
   }
   return(
    <div>
        <h1 type="button" onMouseOver={incrementCount}>Hover {count} times</h1>
    </div>
   )
}

export default HoverCounter;