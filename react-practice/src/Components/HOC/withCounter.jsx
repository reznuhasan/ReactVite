import React, { useState } from "react";

const withCounter=(orginalComponent)=>{
    const NewComponent=()=>{
      const [count,setCount]=useState(0);
     const increment=()=>{
        setCount(count+1);
      }
      return(
        <orginalComponent count={count} increment={increment}></orginalComponent>
      )
    }
    return NewComponent;
}

export default withCounter;