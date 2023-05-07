import React, { useReducer } from "react";
import MultiButton from "./MultiButton";
const initialstate=0;
const reducer=(state,action)=>{
    switch(action){
        case 'increment':return state+1;
        case 'decrement':return state-1;
        case 'multipication':return state*2;
    }

}
const Counter=()=>{
    const [count,dispatch]=useReducer(reducer,initialstate)
    return(
        <div>
            <p>Count: {count}</p>
            <button type="button" onClick={()=>dispatch('increment')}>Increment</button>
            <button type="button" onClick={()=>dispatch('decrement')}>decrement</button>
            <MultiButton dispatch={dispatch}>Multipication Button</MultiButton>
        </div>
    )
}

export default Counter;