
import './App.css'
import Carts from './features/cart/Carts'
import Products from './features/product/Products'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Products/>
      ),
    },
    {
      path: "/cart",
      element: <Carts/>
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
