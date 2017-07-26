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
              <a target="_blank" href="img_1.jpeg">
                <img src={require('../../images/img_1.jpeg')} alt="Style_1" width="300" height="200" />
              </a>
              <div className="desc">Add a description of the image here</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="forest.jpg">
                <img src={require('../../images/img_2.jpg')} alt="Style_2" width="300" height="200" />
              </a>
              <div className="desc">Add a description of the image here</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="lights.jpg">
                <img src={require('../../images/img_3.jpeg')} alt="Northern Lights" width="300" height="200" />
              </a>
              <div className="desc">Add a description of the image here</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
              <a target="_blank" href="mountains.jpg">
                <img src={require('../../images/img_4.jpeg')} alt="Mountains" width="300" height="200" />
              </a>
              <div className="desc">Add a description of the image here</div>
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
