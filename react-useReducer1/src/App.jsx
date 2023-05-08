import { createContext, useReducer } from 'react'
import './App.css'
import Counter from './Components/Counter'
const AppState=createContext();
const initialState=5;
const reducer=(state,action)=>{
  switch(action){
    case 'increment':return state+1;
    case 'decrement':return state-1;
  }
}
function App() {
  const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <>
      <h1>Count: {count}</h1>
      <AppState.Provider value={dispatch}>
      <Counter></Counter>
      </AppState.Provider>
      
    </>
  )
}
export default App;
export  {AppState};
