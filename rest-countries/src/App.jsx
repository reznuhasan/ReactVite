import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Service from './Components/Service/Service'
import Country from './Components/Country/Country'
import Layout from './Components/Layout/Layout'
import Dashboard from './Components/Host/Dashboard'
import Income from './Components/Host/Income'
import Reviews from './Components/Host/Reviews'
import HostLayout from './Components/Layout/HostLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home></Home>} />
            <Route path='service' element={<Service />} />
            <Route path="/service/:name" element={<Country />} />
            <Route path='/host' element={<HostLayout />}>
              <Route path="/host" element={<Dashboard />} />
              <Route path="/host/income" element={<Income />} />
              <Route path="/host/reviews" element={<Reviews />} />
            </Route>
          </Route> 

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
