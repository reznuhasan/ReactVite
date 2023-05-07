import React, { useReducer } from "react";
const initialState={
    counter:0,
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':return {counter: state.counter+action.value}
        case 'decrement':return {counter: state.counter-action.value}
    }
}
const Complex=()=>{
    const [count,dispatch]=useReducer(reducer,initialState)
    return(
        <div>
           <h1>Count: {count.counter}</h1>
           <button type="button" onClick={()=>dispatch({
            type:'increment',
            value:1
           })}>Increment by 1</button>
           <button type="button" onClick={()=>dispatch({
            type:'increment',
            value:5
           })}>Increment by 5</button>
           <button type="button" onClick={()=>dispatch({
            type:'decrement',
            value:1
           })}>decrement by 1</button>
           <button type="button" onClick={()=>dispatch({
            type:'decrement',
            value:5
           })}>decrement by 5</button>
        </div>
    )
}

export default Complex;