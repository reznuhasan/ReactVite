
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Home from './components/Home/Home';
import Products from './components/Product/Products';
import Carts from './components/Cart/Carts';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Products/>}/>
      <Route path='/cart' element={<Carts/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
