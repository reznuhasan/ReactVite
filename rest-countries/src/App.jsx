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
import Details from './Components/CountryInfo/Details'
import Population from './Components/CountryInfo/Population'
import Others from './Components/CountryInfo/Others'
import CountryLayout from './Components/Layout/CountryLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home></Home>} />
            <Route path='service' element={<Service />} />
            <Route path="service/:name" element={<Country />} />
            <Route path='host' element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path='service' element={<Service/>}/>
              <Route path="service/:name" element={<CountryLayout/>}>
                <Route index element={<Details/>}/>
                <Route path='population' element={<Population/>}/>
                <Route path='others' element={<Others/>}/>
              </Route>
              <Route path="reviews" element={<Reviews />} />

            </Route>
          </Route> 

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
