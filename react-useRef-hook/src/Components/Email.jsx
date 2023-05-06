import React from "react";

const Email=({type,placeholder},ref)=>{
    return(
        <div>
            <input ref={ref} type={type} placeholder={placeholder} />
        </div>
    )
}

const forwardEmail=React.forwardRef(Email)

export default forwardEmail;