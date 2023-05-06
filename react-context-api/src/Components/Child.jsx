import React, { useContext } from "react";
import { AppContext } from "./Context/useContext";

const Child=()=>{
    const userData=useContext(AppContext)
    console.log(userData)
    return(
        <div>
            <h1>This is Child Section</h1>
        </div>
    )
}

export default Child;