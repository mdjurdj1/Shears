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
          <p className="service"><p className="service_header">HAIR SCULPTING <span className="purp">&</span> SYLING</p>
            <span className="service_description"> Lady’s Haircuts $40-$100</span> <br />
            <span className="service_description"> Gentelmens Haircuts $20-$80</span> <br />
            <span className="service_description"> Childrens Haircuts $20</span> <br /> <br />
            <span className="service_description"> Hair Braiding $25+</span> <br />
            <span className="service_description"> Blowout $35+</span> <br />
            <span className="service_description"> Updo $75+</span> <br />
            <span className="service_description"> Shears Signature Blowout & Make up Package-Deal $100+</span> <br />
            <span className="service_description"> Extensions Priced Upon Consultation</span> <br />
          </p>

          <p className="service"><p className="service_header">HAIR COLORS <span className="purp">&</span> HIGHLIGHTS</p>
            <span className="service_description"> Single Process $80+</span> <br />
            <span className="service_description"> Roots Touch Up $50+</span> <br />
            <span className="service_description"> Double Process $120+</span> <br /> <br />
            <span className="service_description"> Color Correction - Priced Upon Consultation</span> <br />
            <span className="service_description"> Color Consultation - Complementary</span> <br />
          </p>

          <p className="service"><p className="service_header">BRIDAL MAKEUP <span className="purp">&</span> HAIR</p>
            <span className="service_description"> Makeup Application $150 ($250+ on location)</span> <br />
            <span className="service_description"> Touch Up Application $65+</span> <br />
            <span className="service_description"> Bridal Makeup $200 ($400+ on location)</span> <br /> <br />
            <span className="service_description"> Bridal Hair $200 ($400+ on location)</span> <br />
            <span className="service_description">*For private bridal parties/events inquiries, please email ShearsNYC@gmail.com for more information.</span> <br />
          </p>

          <p className="service"><strong>
            *Prices may vary by stylist <br/>
            *All services include our signature blow out & finished style <br />
            *24 hour courtesy cancellation policy <br />
            *Hair consultation-complementary <br />
            *Gratuity is cash only <br />
            Shears gift certificates are now available!<br/>
            </strong>
          </p>
         </div>

         <div className="col_2">
            <img id="bridal_pic" src={require('../../images/long_image.jpg')} alt="Bridal Picture" style={{width:400, height:700}} />
          </div>
       </div>
    )}
    }

export default Rates
