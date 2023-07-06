
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import RootLayout from './Layout/RootLayout'
import Products from './Components/Product/Products'

function App() {
  createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Home/>}>
        <Route path='contact' element={<Contact/>}/>
      </Route>
    )
  )
 const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout/>}>
    <Route path='/' element={<Home/>}>
      <Route path='contact' element={<Contact/>}/>
    </Route> 
    <Route path='/about' element={<About/>}/> 
    <Route path='/product' element={<Products/>}/>
  </Route>

 ))
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
