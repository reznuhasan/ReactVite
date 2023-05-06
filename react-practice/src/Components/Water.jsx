import React from "react";

const Water=({value})=>{
    return(
        <div>
        {(value>=100)?<h1>Water is Boiled</h1>:
        <h1>Water is not Boiled </h1>
        }   
        </div>
       
    )
}

export default Water;