import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from '../Pages/Headers'

function Layout() {
  return (
    <div>
       <Headers/>
       <Outlet/>
    </div>
  )
}

export default Layout