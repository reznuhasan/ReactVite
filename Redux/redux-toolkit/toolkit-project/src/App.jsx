
import { useSelector } from 'react-redux'
import './App.css'
import Account from './components/Account'
import Bonus from './components/Bonus'

function App() {
  const {account,bonus}=useSelector(state=>state)
  const amount=account.count
  const tBonus=bonus.point
  return (
    <>
      <h1>App</h1>
      <h1 style={{color:'yellow'}}>Current Amount:{amount}</h1>
      <h1 style={{color:'yellow'}}>Total Bonus:{tBonus}</h1>
      <Account/>
      <Bonus/>

    </>
  )
}

export default App
