import React from "react";

const Title=()=>{

    return(<div>
        {console.log('title re-rendering')}
        <h1>useCallback hooks practice</h1>
    </div>
        
    )
}

export default React.memo(Title);

