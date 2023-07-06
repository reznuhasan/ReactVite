import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../Components/Navbar/NavbarComponent'

function RootLayout() {
  return (
    <div>
        <NavbarComponent/>
        <Outlet/>
    </div>
  )
}

export default RootLayout