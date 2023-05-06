import React, { useState } from "react";

const TemperatureInput=({handleChanged,temp,scale})=>{ 

    return(
        <div>
           <fieldset>
            <legend>Enter temperature in {(scale==='c')?"Celcius":"Farenheit"}:</legend>
            <input type="text" onChange={(e)=>handleChanged(e.target.value,scale)} value={temp} />
           </fieldset>
        </div>
    )
}

export default TemperatureInput;