import React, { useReducer } from 'react'
const initialState1={
    multi:1,
}
const initialState2={
    multi:1,
}
const reducer=(state,action)=>{
       switch(action.type){
        case 'INCREMENT':return {multi:state.multi*action.value}
        case 'DECREMENT':return {multi:state.multi/action.value}
       }
}
function CounterThree() {
    const [state1,dispatch1]=useReducer(reducer,initialState1)
    const [state2,dispatch2]=useReducer(reducer,initialState2)
  return (
    <div>
        <h1>Calculation1:{state1.multi}</h1>
        <h2>Calculation2:{state2.multi}</h2>
        <button type='button' onClick={()=>dispatch1({type:"INCREMENT",value:5})}>INCREMENT 1</button>
        <button type='button' onClick={()=>dispatch1({type:"DECREMENT",value:5})}>DECREMENT 1</button>
        <button type='button' onClick={()=>dispatch2({type:"INCREMENT",value:5})}>INCREMENT 2</button>
        <button type='button' onClick={()=>dispatch2({type:"DECREMENT",value:5})}>DECREMENT 2</button>

    </div>
  )
}

export default CounterThree