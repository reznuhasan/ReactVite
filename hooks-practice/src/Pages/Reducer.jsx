
import React, { useReducer } from 'react'
const initialState={
    count:0,
    count1:0,
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {...state,count:state.count+action.value}
        case 'DECREMENT':
            return {...state,count:state.count-action.value}
        case 'INCREMENT1':
            return {...state,count1:state.count1+action.value}
        case 'DECREMENT1':
            return {...state,count1:state.count1-action.value}
        default:
            return state;
    }
}
function Reducer() {
    const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <h1>Count:{state.count}</h1>
        <h1>Count:{state.count1}</h1>
        <button type='button' onClick={()=>dispatch({type:'INCREMENT',value:1})}>Increment by 1</button>
        <button type='button' onClick={()=>dispatch({type:'DECREMENT',value:1})}>Decrement 1</button>
        <button type='button' onClick={()=>dispatch({type:'INCREMENT',value:5})}>Increment 5</button>
        <button type='button' onClick={()=>dispatch({type:'DECREMENT',value:5})}>Decrement 5</button>
        <button type='button' onClick={()=>dispatch({type:'INCREMENT1',value:5})}>Increment1 5</button>
        <button type='button' onClick={()=>dispatch({type:'DECREMENT1',value:5})}>Decrement1 5</button>
    </div>
  )
}

export default Reducer