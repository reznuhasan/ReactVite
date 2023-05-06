import React, { useState } from "react";

const ClickCounter=({incrementCount})=>{
   
   return(
    <div>
        <button type="button" onClick={incrementCount}>Clicked times</button>
    </div>
   )
}

export default ClickCounter;