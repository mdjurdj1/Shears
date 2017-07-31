import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import Lightbox from 'react-image-lightbox'

import HoursContainer from '../../components/HoursContainer'
import StoreInfoContainer from '../../components/StoreInfoContainer'
import img_1 from '../../images/img_1.jpg'
import img_1_alt from '../../images/img_1_alt.jpeg'
import img_2 from '../../images/img_2.jpg'
import img_3 from '../../images/img_3.jpeg'
import img_4 from '../../images/img_4.jpeg'
import img_5 from '../../images/img_5.jpeg'
import img_6 from '../../images/img_6.jpeg'
import img_7 from '../../images/img_7.jpg'
import img_8 from '../../images/img_8.jpg'
import img_9 from '../../images/img_9.jpg'
import customStyle from './customStyle.js'
import './gallery.css'

const images = [
    img_1_alt,
    img_2,
    img_3,
    img_4,
    img_5,
    img_6,
    img_7,
    img_8
];

class Gallery extends Component {
  state = {
    lightBoxOpen: false,
    photoIndex: 0,
  }
  openLightBox = (index) => {
    this.setState({lightBoxOpen: true, photoIndex: index})
  }
  render() {
    const {
      photoIndex,
      lightBoxOpen,
      } = this.state;

    return (
       <div id="gallery_wrapper">

        {lightBoxOpen &&
           <Lightbox
               mainSrc={images[photoIndex]}
               nextSrc={images[(photoIndex + 1) % images.length]}
               prevSrc={images[(photoIndex + images.length - 1) % images.length]}

               onCloseRequest={() => this.setState({ lightBoxOpen: false })}
               onMovePrevRequest={() => this.setState({
                   photoIndex: (photoIndex + images.length - 1) % images.length,
               })}
               onMoveNextRequest={() => this.setState({
                   photoIndex: (photoIndex + 1) % images.length,
               })}
           />
           }

        <div className="col_1">
          <h1>Check out our gallery!</h1>
          <p>Click any photo for a closer look! <br />Stylist responsible for each look is credited under the photo.</p>
          <div className="responsive">
            <div className="gallery">
                <img onClick={() => this.openLightBox(0)} src={img_1} style={{width:140, height:140}} />
              <div className="desc">Stylist: Aida</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <img onClick={() => this.openLightBox(1)} src={img_9} style={{width:140, height:140}} />
              <div className="desc">Stylist: George</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <img onClick={() => this.openLightBox(2)} src={img_6} style={{width:140, height:140}} />
              <div className="desc">Stylist: Nathalie</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <img onClick={() => this.openLightBox(3)} src={img_7} style={{width:140, height:140}} />
              <div className="desc">Stylist: George</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <img onClick={() => this.openLightBox(4)} src={img_4} style={{width:140, height:140}} />
              <div className="desc">Stylist: Alexis</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <img onClick={() => this.openLightBox(5)} src={img_5} style={{width:140, height:140}} />
              <div className="desc">Stylist: Alexis</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <img onClick={() => this.openLightBox(6)} src={img_3} style={{width:140, height:140}} />
              <div className="desc">Stylist: Alexis</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <img onClick={() => this.openLightBox(7)} src={img_8} style={{width:140, height:140}} />
              <div className="desc">Stylist: Nathalie</div>
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
