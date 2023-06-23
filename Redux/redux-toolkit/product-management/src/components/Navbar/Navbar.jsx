import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux'

function Navbar() {
  const items = useSelector(state => state.items.items)
  
  const totalCount = () => {
    const totalCount = items.reduce((accumulator, item) => {
      return accumulator + item.quantity;
    }, 0);

    return totalCount;
  }

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
          </li>
          <li>
            <span>
              Cart Items: {totalCount()}
            </span>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
