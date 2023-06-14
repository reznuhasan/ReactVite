import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
const classNameFunc=({isActive})=>(isActive)?"active":null;
function Headers() {
  return (
    <div className='nav'>
        <NavLink to="/" className={classNameFunc}>Home</NavLink>
        <NavLink to="/about" className={classNameFunc}>About</NavLink>
        <NavLink to="/service" className={classNameFunc}>Service</NavLink>
        <NavLink to="/contact" className={classNameFunc}>Contact</NavLink>
    </div>
  )
}

export default Headers;