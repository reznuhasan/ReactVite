
import { createContext, useReducer } from 'react'
import './App.css'
import GrandParent from './Pages/GrandParent'
const initialState1={
  count:0,
}
export const valueContext=createContext();
const reducer=(state,action)=>{
  switch(action.type){
    case "Increment":
      return {count:state.count+action.value}
    case "Decrement":
      return {count:state.count-action.value}
  }
}
function App() {
  const [state1,dispatch]=useReducer(reducer,initialState1)
  return (
    <> 
      <h1>Count1 :{state1.count}</h1>
      <valueContext.Provider value={{dispatch:dispatch}}>
      <GrandParent/>
      </valueContext.Provider>
      
    </>
  )
}

export default App
