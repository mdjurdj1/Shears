import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => (
  <nav id="navbar">
    <ul>
      <li><NavLink to="/home" activeClassName="selected">Home</NavLink></li>
      <li><NavLink to="/rates" activeClassName="selected">Rates</NavLink></li>
      <li><NavLink to="/gallery" activeClassName="selected">Gallery</NavLink></li>
      <li><NavLink to="/products" activeClassName="selected">Products</NavLink></li>
      <li><NavLink to="/contact" activeClassName="selected">Contact</NavLink></li>
    </ul>
  </nav>
)

export default Navbar
