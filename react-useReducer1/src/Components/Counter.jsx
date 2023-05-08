import React, { useContext } from "react";
import { AppState } from "../App";

const Counter=()=>{
    const dispatch=useContext(AppState)
    return(
        <div>
            <button type="button" onClick={()=>dispatch('increment')}>Increment By 1</button>
            <button type="button" onClick={()=>dispatch('decrement')}>Decrement By 1</button>
        </div>
    )
}

export default Counter;