import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
        <h1>REDUX STORE</h1>
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
                <span>
                    Cart Items:0
                </span>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar