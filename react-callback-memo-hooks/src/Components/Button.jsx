import React from "react";

const Button=({handleClick,children})=>{

    return(<div>
        {console.log(children,'re-rendering')}
        <button onClick={handleClick}>{children}</button>
    </div>
        
    )
}

export default React.memo(Button);