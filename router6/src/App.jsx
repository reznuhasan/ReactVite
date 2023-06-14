
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'
import Home from './Pages/Home'
import Service from './Pages/Service'
import Country from './Pages/Country'
import Layout from './Components/Layout'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="" element={<Home></Home>} />
            <Route path='service' element={<Service />} />
            <Route path='service/:name' element={<Country />} />
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
