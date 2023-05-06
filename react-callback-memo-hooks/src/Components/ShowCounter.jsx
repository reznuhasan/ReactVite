import React from "react";

const ShowCounter=({count})=>{

    return(<div>
        {console.log('counter re-rendering')}
        <h1>clicked Number {count}</h1>
    </div>
        
    )
}

export default React.memo(ShowCounter);