import React from "react";

const Button=({children,Increment,decrement})=>{
    return(
        <div>
            <button onClick={(Increment)?Increment:decrement}>{children}</button>
        </div>
    )
}

export default Button;