import React, { useReducer } from 'react'
const initialState={
    counter1:0,
    counter2:0,
    counter3:0,
    counter4:0
}
const reducer=(state,action)=>{
    switch(action.type){
        case "INCREMENT1":return {...state,counter1:state.counter1+action.value}
        case "DECREMENT1":return {...state,counter1:state.counter1+action.value}
        case "INCREMENT2":return {...state,counter2:state.counter2+action.value}
        case "DECREMENT2":return {...state,counter2:state.counter2+action.value}
        case "INCREMENT3":return {...state,counter3:state.counter3+action.value}
        case "DECREMENT3":return {...state,counter3:state.counter3+action.value}
    }
}
function ComplexCounter() {
    const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      <h1>Count1:{state.counter1}</h1>
      <h1>Count2:{state.counter2}</h1>
      <h1>Count3:{state.counter3}</h1>
      <button type='button' onClick={()=>dispatch({type:"INCREMENT1",value:5})}>INCREMENT1</button>
      <button type='button' onClick={()=>dispatch({type:"DECREMENT1",value:5})}>DECREMENT1</button>
      <br />
      
      <button type='button' onClick={()=>dispatch({type:"INCREMENT2",value:5})}>INCREMENT2</button>
      <button type='button' onClick={()=>dispatch({type:"DECREMENT2",value:5})}>DECREMENT2</button>
      <br />
      <button type='button' onClick={()=>dispatch({type:"INCREMENT3",value:5})}>INCREMENT3</button>
      <button type='button' onClick={()=>dispatch({type:"DECREMENT3",value:5})}>DECREMENT3</button>
      <br />
    </div>
  )
}

export default ComplexCounter