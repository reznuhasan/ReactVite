import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
        <h1>Ecommerce</h1>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                <NavLink to="/product">Products</NavLink>
                </li>
                <li>
                <NavLink to="/cart">Cart</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar