import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

import HoursContainer from '../../components/HoursContainer'
import StoreInfoContainer from '../../components/StoreInfoContainer'
import './home.css'

class Home extends Component {
  render() {
    return (
       <div id="home_wrapper">
        <div className="col_1">
          <h1>Our Story</h1>
          <p>Shears Salon was created by brother and sister team, Michael and Hannah Wrynn.</p>
          <p>We're focused on delivering high-end salon quality services and products, without the high-end attitude... just good natured, knowledgeable professionals performing the services they love.</p>
          <p>We aim to be New York's "one-stop-beauty-shop" by offering a full menu of hair, nail, eyelash, skin, and waxing services while having our most trusted products available for our clients to purchase. </p>
          <p>While internal beauty will always reign supreme, we wholeheartedly believe that when people look better on the outside, they feel better on the inside. If we can improve your quality of life through the services we provide, then we have completed our mission. </p>
          <p>You take care of the inner beauty... leave the rest to us. </p>
          <img id="salon_main" src={require('../../images/salon_main.jpg')} alt="Style_2" style={{width:600, height:413}} />
         </div>

         <div className="col_2">
          <HoursContainer />
          <StoreInfoContainer />
          </div>
       </div>
     )}
   }

export default Home
