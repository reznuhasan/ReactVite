import React, { useEffect, useState,useRef } from "react";

const Timer=()=>{
    const [time,setTime]=useState(new Date())
    const intervalRef=useRef()
    const tick=()=>{
        setTime(new Date())
    }
    useEffect(()=>{
       intervalRef.current= setInterval(tick,1000)

      return()=>{
        clearInterval(intervalRef.current)
      }
    },[])
    return(
        <div>
            <h1>{time.toLocaleTimeString()}</h1>
            <button type="button" onClick={()=>clearInterval(intervalRef.current)}>clean up</button>
        </div>
    )
}

export default Timer;