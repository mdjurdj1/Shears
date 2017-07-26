import React from 'react'
import { NavLink } from 'react-router-dom'
import Icon from 'semantic-ui-react'
import './navbar.css'

const Navbar = () => (
  <nav id="navbar">
    <ul>
      <li><NavLink to="/home" activeClassName="selected">Home</NavLink></li>
      <li><NavLink to="/news" activeClassName="selected">Rates</NavLink></li>
      <li><NavLink to="/contact" activeClassName="selected">Gallery</NavLink></li>
      <li><NavLink to="/prices" activeClassName="selected">Products</NavLink></li>
      <li><NavLink to="/prices" activeClassName="selected">Contact</NavLink></li>
    </ul>
  </nav>
)

export default Navbar
