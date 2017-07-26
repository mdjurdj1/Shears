import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

import HoursContainer from '../../components/HoursContainer'
import StoreInfoContainer from '../../components/StoreInfoContainer'
import './rates.css'

class Rates extends Component {
  render() {
    return (
       <div id="rates_wrapper">
        <div className="col_1">
          <h1>Our Rates</h1>
          <p>Here you will find the rates for our Shears services.</p>
          <p className="service"><strong>Cuts and Hair Styling</strong> <span className="price">$35+</span> <br /><span className="service_description"> Includes styling, finishing, and product for both Men & Women.</span></p>
          <p className="service"><strong>Colors & Highlights</strong> <span className="price">$60+</span> <br /> <span className="service_description">Single Process, Highlights, and Gloss - varied selection of colors and treatments!</span></p>
          <p className="service"><strong>Nails</strong> <span className="price">$15+</span> <br /> <span className="service_description">Manicures, Pedicures, and Packages available for selection.</span></p>
          <p className="service"><strong>Spa Services</strong> <span className="price">$105+</span> <br /><span className="service_description">Deep Tissue Massages, Aromatherapy, and hydrating Facials to renew your energy.</span></p>
          <p className="service"><strong>Waxing</strong> <span className="price">$25+</span> <br /><span className="service_description">We provide waxing services for face, body, and bikini. French Cirepil wax is used for all services.</span></p>
          <p> All special requests can be accomodated. Call for more details!</p>
         </div>

         <div className="col_2">
          <HoursContainer />
          <StoreInfoContainer />
          </div>
       </div>
    )}
    }

export default Rates
