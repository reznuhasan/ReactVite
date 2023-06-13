import React, { useReducer } from 'react'
const initialState={
    count:0
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'increment':
            return {count:state.count+1}
        case 'decrement':
            return {count:state.count-1}
        case 'fiveIncrement':
            return {count:state.count+5}
        case 'fiveDecrement':
            return {count:state.count-5}
    }
}
function Reducer() {
    const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <div>
        <h1>Count-{state.count}</h1>
        <button type="button" onClick={()=>dispatch({type:'increment'})}>Increment</button>
        <button type='button' onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
        <button type='button' onClick={()=>dispatch({type:"fiveIncrement"})}>Add Five</button>
        <button type='button' onClick={()=>dispatch({type:"fiveDecrement"})}>Minus Five</button>
    </div>
  )
}

export default Reducer