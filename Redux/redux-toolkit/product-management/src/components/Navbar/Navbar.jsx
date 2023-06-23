import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux'
function Navbar() {
    const items=useSelector(state=>state.items.items)

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
                    Cart Items:{items.length}
                </span>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar