import React, { useEffect, useState } from "react";

const MyComponents=()=>{
    const [count,setCount]=useState(0);
    const [date,setDate]=useState(new Date())
    const [text,setText]=useState('')
    const tick=()=>{
        console.log("clock ticking")
        setDate(new Date())
    }
    useEffect(()=>{
        console.log('updating document')
    },[count])
    useEffect(()=>{
       const interval=setInterval(tick,1000)
       return()=>{
        console.log("Interval unmount")
        clearInterval(interval)
       }
    },[date])
    const addClick=()=>{
        setCount(count+1)
    }
    return(
        <div>
            <p>Time:{date.toLocaleTimeString()}</p>
            <input type="text" onChange={(e)=>setText(e.target.value)} />
            <p>
                <button type="button" onClick={addClick}>
                    click
                </button>
            </p>
        </div>
    )
}

export default MyComponents;