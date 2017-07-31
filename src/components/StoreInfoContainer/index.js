import React from 'react'
import { NavLink } from 'react-router-dom'
import './storeinfo.css'

const StoreInfoContainer = () => (
  <div id="store_info_container">
   <h2>Shears Salon & Designs <i className="fa fa-map-marker" aria-hidden="true"></i></h2>
   <p>51 Church St <br/>
   Chatham, NY 12037 <br/>
   (518) 392-3550
   </p>
   <p>
    <i className="fa fa-facebook" aria-hidden="true"></i>
    <i className="fa fa-twitter" aria-hidden="true"></i>
    <i className="fa fa-youtube" aria-hidden="true"></i>
    <i className="fa fa-instagram" aria-hidden="true"></i>
    <i className="fa fa-pinterest-p" aria-hidden="true"></i>
   </p>
   <NavLink to="/contact">View on the Map</NavLink>
  </div>
)

export default StoreInfoContainer
