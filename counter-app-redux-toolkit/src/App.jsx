import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increaseByAmount, increment, reset } from './features/counter/counterSlice';

function App() {
  const count=useSelector(state=>state.counter.count)
  const dispatch=useDispatch();
  return (
    <>
     <h1>Count:{count}</h1>
     <button onClick={()=>{dispatch(increment())}}>increment</button>
     <button onClick={()=>{dispatch(decrement())}}>decrement</button>
     <button onClick={()=>{dispatch(increaseByAmount(10))}}>increaseByAmount</button>
     <button onClick={()=>{dispatch(reset(10))}}>RESET</button>
    </>
  )
}

export default App
