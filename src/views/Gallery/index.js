import React, {Component} from 'react';
import Lightbox from 'react-image-lightbox'

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
import img_10 from '../../images/img_10.jpg'
import img_11 from '../../images/img_11.jpg'
import './gallery.css'

const images = [
    img_1_alt,
    img_2,
    img_3,
    img_4,
    img_5,
    img_6,
    img_7,
    img_8,
    img_9,
    img_10,
    img_11
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
    const {photoIndex, lightBoxOpen} = this.state

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

        <div className="col_4">
          <h1>Check out our gallery!</h1>
          <p>Click any photo for a closer look! <br />Stylist responsible for each look is credited under the photo.</p><br />

          <div className="responsive">
            <div className="gallery">
                <div className="img_wrap"><img onClick={() => this.openLightBox(0)} src={img_1} alt="" style={{width:200, height:200}} /></div>
              <div className="desc">Stylist: Aida</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <div className="img_wrap"><img onClick={() => this.openLightBox(1)} src={img_2} alt="" style={{width:200, height:200}} /></div>
              <div className="desc">Stylist: George</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <div className="img_wrap"><img onClick={() => this.openLightBox(2)} src={img_3} alt="" style={{width:200, height:200}} /></div>
              <div className="desc">Stylist: Nathalie</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <div className="img_wrap"><img onClick={() => this.openLightBox(3)} src={img_4} alt="" style={{width:200, height:200}} /></div>
              <div className="desc">Stylist: George</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <div className="img_wrap"><img onClick={() => this.openLightBox(4)} src={img_5} alt="" style={{width:200, height:200}} /></div>
              <div className="desc">Stylist: Alexis</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <div className="img_wrap"><img onClick={() => this.openLightBox(5)} src={img_6} alt="" style={{width:200, height:200}} /></div>
              <div className="desc">Stylist: Alexis</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <div className="img_wrap"><img onClick={() => this.openLightBox(6)} src={img_7} alt="" style={{width:200, height:200}} /></div>
              <div className="desc">Stylist: Alexis</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <div className="img_wrap"><img onClick={() => this.openLightBox(7)} src={img_8} alt="" style={{width:200, height:200}} /></div>
              <div className="desc">Stylist: Nathalie</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <div className="img_wrap"><img onClick={() => this.openLightBox(8)} src={img_9} alt="" style={{width:200, height:200}} /></div>
              <div className="desc">Stylist: Aida</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <div className="img_wrap"><img onClick={() => this.openLightBox(9)} src={img_10} alt="" style={{width:200, height:200}} /></div>
              <div className="desc">Stylist: Michael</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <div className="img_wrap"><img onClick={() => this.openLightBox(10)} src={img_11} alt="" style={{width:200, height:200}} /></div>
              <div className="desc">Stylist: Eva</div>
            </div>
          </div>

      </div>


       </div>
     )}
   }

export default Gallery
