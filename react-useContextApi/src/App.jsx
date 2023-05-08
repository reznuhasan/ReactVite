
import { createContext, useState } from 'react'
import './App.css'
import ComA from './Components/ComA'
const AppState=createContext();
function App() {
  const [count,setCount]=useState(10)
  const handleClick=()=>{
    setCount(prevState=>prevState+1)
  }
  return (
    <>
     <AppState.Provider value={{count,handleClick}}>
     <ComA/>
     </AppState.Provider>
    </>
  )
}

export default App;
export  {AppState};
