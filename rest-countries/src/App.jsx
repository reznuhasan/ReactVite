import { BrowserRouter, Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Service from './Components/Service/Service'
import Country from './Components/Country/Country'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path="/service/:name" element={<Country/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
