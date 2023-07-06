import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import './NavbarComponent.css'
function NavbarComponent() {
  return (
    <div>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Link to="/" className='warning' style={{
            "textDecoration":"none",
            "color":"darkred",
            "fontSize":"24px",
            "fontWeight":"700"
          }}>Eco-Mico</Link>
          <Nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/product">Product</NavLink>
            
          </Nav>
          <Link to="/cart" style={{
            "textDecoration":"none",
            "color":"black",
            "fontSize":"24px",
            "fontWeight":"700"
          }}>Cart-0</Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarComponent