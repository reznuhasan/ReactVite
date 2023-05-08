import { useContext } from "react"
import { AppState } from "../App"

function ComC() {
    const data=useContext(AppState)
    const {count,handleClick}=data
    return (
      <>
        <h1>Context Api Practice</h1>
        <h2>Count:-{count}</h2>
        <button onClick={handleClick}>Increment</button>
      </>
    )
  }
  
  export default ComC