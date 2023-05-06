import React, { useEffect, useRef } from "react";
import Email from "./Email";
const Form=()=>{
    const inputRef=useRef(null)
    const emailRef=useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    
    return(
        <div>
            <input ref={inputRef} type="text" placeholder="enter something"/>
            <Email ref={emailRef} type="email" placeholder="enter your email"></Email>
        </div>
    )
}

export default Form;