import React, { useReducer } from "react";
const initialState=0;
const initialState2=5;
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':return state+action.value;
        case 'decrement':return state-action.value;
    }
}
const Multiple = () => {
    const [count,dispatch]=useReducer(reducer,initialState)
    const [count2,dispatch2]=useReducer(reducer,initialState2)
    return (
        <div>
            <div>
                <h1>Count:  {count}</h1>
                <button type="button" onClick={() => dispatch({type:'increment',value:10})}>Increment</button>
                <button type="button" onClick={() => dispatch({type:'decrement',value:10})}>decrement</button>
            </div>
            <div>
                <h1>Count:  {count2}</h1>
                <button type="button" onClick={() => dispatch2({type:'increment',value:1})}>Increment</button>
                <button type="button" onClick={() => dispatch2({type:'decrement',value:1})}>decrement</button>
            </div>
        </div>
    )
}

export default Multiple;