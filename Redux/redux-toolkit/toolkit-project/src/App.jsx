
import { useSelector } from 'react-redux'
import './App.css'
import Account from './components/Account'
import Bonus from './components/Bonus'

function App() {
  const count=useSelector(state=>state.account.count)
  return (
    <>
      <h1>App</h1>
      <h1 style={{color:'yellow'}}>Current Amount:{count}</h1>
      <h1 style={{color:'yellow'}}>Total Bonus:</h1>
      <Account/>
      <Bonus/>

    </>
  )
}

export default App
