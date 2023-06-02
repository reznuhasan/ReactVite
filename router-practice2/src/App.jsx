import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Service from './Components/Service/Service'
import CountryDetail from './Components/CountryDetail/CountryDetail'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home></Home>}/>
        <Route path="/" element={<Home></Home>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/service/:name' element={<CountryDetail/>}/>
      </Routes>
    </BrowserRouter>
        
    </>
  )
}

export default App
