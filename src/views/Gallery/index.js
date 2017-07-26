import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

import HoursContainer from '../../components/HoursContainer'
import StoreInfoContainer from '../../components/StoreInfoContainer'
import './gallery.css'

class Gallery extends Component {
  render() {
    return (
       <div id="gallery_wrapper">
        <div className="col_1">
          <h1>Check out our gallery!</h1>

          <div className="responsive">
            <div className="gallery">
                <img src={require('../../images/img_1.jpg')} alt="Style_1" style={{width:180, height:145}} />
              <div className="desc">Stylist: George</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <img src={require('../../images/img_2.jpg')} alt="Style_2" style={{width:180, height:145}} />
              <div className="desc">Stylist: Aida</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <img src={require('../../images/img_6.jpeg')} alt="Style_3" style={{width:180, height:155}} />
              <div className="desc">Stylist: Nathalie</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <img src={require('../../images/img_7.jpg')} alt="Style_4" style={{width:180, height:250}} />
              <div className="desc">Stylist: George</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <img src={require('../../images/img_3.jpeg')} alt="Northern Lights" style={{width:180, height:250}} />
              <div className="desc">Stylist: Hannah</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <img src={require('../../images/img_5.jpeg')} alt="Mountains" style={{width:180, height:250}} />
              <div className="desc">Stylist: Alexis</div>
            </div>
          </div>

      </div>

         <div className="col_2">
            <HoursContainer />
            <StoreInfoContainer />
          </div>
       </div>
     )}
   }

export default Gallery
