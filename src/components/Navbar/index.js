import React from 'react'
import { NavLink } from 'react-router-dom'
import Icon from 'semantic-ui-react'
import './navbar.css'

const Navbar = () => (
  <nav id="navbar">
    <ul>
      <li><NavLink to="/home" activeClassName="selected">Home</NavLink></li>
      <li><NavLink to="/news" activeClassName="selected">News</NavLink></li>
      <li><NavLink to="/contact" activeClassName="selected">Contact</NavLink></li>
      <li><NavLink to="/prices" activeClassName="selected">About</NavLink></li>
    </ul>
  </nav>
)

export default Navbar
