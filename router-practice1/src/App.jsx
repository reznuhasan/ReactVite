import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Header from './Components/Header'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>
          
        </Route>
        <Route path='/home' element={<Home></Home>}>
          
        </Route>
        <Route path='/about' element={<About></About>}>
        </Route>
        <Route path='/contact' element={<Contact></Contact>}> 
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
