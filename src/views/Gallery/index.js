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
import img_12 from '../../images/img_12.jpg'
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
    img_11,
    img_12
];

class Gallery extends Component {
  state = {
    lightBoxOpen: false,
    photoIndex: 0,
  }

  componentDidMount() {
    var images = document.getElementsByClassName('img_wrap')
    setTimeout(() => {
      for(let i=0;i<images.length;i++) {images[i].style.backgroundColor = "#CFEDFA"}
    }, 500)
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
          <p>Click any photo for a closer look! <br />Stylists responsible for each look can be contacted via email or phone.</p><br />

          <div className="gallery_row">  {/*Begins Gallery Row 1 here*/}
            <div className="desc">
              <h1>Stylist: Aida</h1>
              <hr />
              <p><span className="purple">Email</span>: AidaD_57@shearsNYC.com</p>
              <p><span className="purple">Phone</span>:<br /> (718) 515-8190</p>
            </div>

            <div className="responsive">
              <div className="gallery">
                  <div className="img_wrap"><img onClick={() => this.openLightBox(0)} src={img_1} alt="" style={{width:200, height:200}} /></div>
              </div>
            </div>

            <div className="responsive">
              <div className="gallery">
                  <div className="img_wrap"><img onClick={() => this.openLightBox(1)} src={img_2} alt="" style={{width:200, height:200}} /></div>
              </div>
            </div>

            <div className="responsive">
              <div className="gallery">
                  <div className="img_wrap"><img onClick={() => this.openLightBox(2)} src={img_3} alt="" style={{width:200, height:200}} /></div>
              </div>
            </div>
          </div> {/*Ends Gallery Row 1 here*/}

          <div className="gallery_row">  {/*Begins Gallery Row 2 here*/}
            <div className="desc">
              <h1>Stylist: Erin</h1>
              <hr />
              <p><span className="purple">Email</span>: heyItsErin@shearsNYC.com</p>
              <p><span className="purple">Phone</span>:<br/> (917) 430-6190</p>
            </div>

            <div className="responsive">
              <div className="gallery">
                  <div className="img_wrap"><img onClick={() => this.openLightBox(3)} src={img_4} alt="" style={{width:200, height:200}} /></div>
              </div>
            </div>

            <div className="responsive">
              <div className="gallery">
                  <div className="img_wrap"><img onClick={() => this.openLightBox(4)} src={img_5} alt="" style={{width:200, height:200}} /></div>
              </div>
            </div>

            <div className="responsive">
              <div className="gallery">
                  <div className="img_wrap"><img onClick={() => this.openLightBox(5)} src={img_6} alt="" style={{width:200, height:200}} /></div>
              </div>
            </div>
          </div> {/*Ends Gallery Row 2 here*/}

          <div className="gallery_row"> {/*Begin gallery row 3 here */}
            <div className="desc">
              <h1>Stylist: Bryan</h1>
              <hr />
              <p><span className="purple">Email</span>: Bryte1983@shearsNYC.com</p>
              <p><span className="purple">Phone</span>:<br/> (917) 915-2120</p>
            </div>

            <div className="responsive">
              <div className="gallery">
                  <div className="img_wrap"><img onClick={() => this.openLightBox(6)} src={img_7} alt="" style={{width:200, height:200}} /></div>
              </div>
            </div>

            <div className="responsive">
              <div className="gallery">
                  <div className="img_wrap"><img onClick={() => this.openLightBox(7)} src={img_8} alt="" style={{width:200, height:200}} /></div>
              </div>
            </div>

            <div className="responsive">
              <div className="gallery">
                  <div className="img_wrap"><img onClick={() => this.openLightBox(8)} src={img_9} alt="" style={{width:200, height:200}} /></div>
              </div>
            </div>
          </div> {/*Ends Gallery Row 3 here*/}

          <div className="gallery_row"> {/*Begins Gallery Row 4 here*/}
            <div className="desc">
              <h1>Stylist:<br/> Eva</h1>
              <hr />
              <p><span className="purple">Email</span>: EvaScalla@shearsNYC.com</p>
              <p><span className="purple">Phone</span>:<br/> (718) 515-8190</p>
            </div>

            <div className="responsive">
              <div className="gallery">
                  <div className="img_wrap"><img onClick={() => this.openLightBox(9)} src={img_10} alt="" style={{width:200, height:200}} /></div>
              </div>
            </div>

            <div className="responsive">
              <div className="gallery">
                  <div className="img_wrap"><img onClick={() => this.openLightBox(10)} src={img_11} alt="" style={{width:200, height:200}} /></div>
              </div>
            </div>

            <div className="responsive">
              <div className="gallery">
                  <div className="img_wrap"><img onClick={() => this.openLightBox(11)} src={img_12} alt="" style={{width:200, height:200}} /></div>
              </div>
            </div>
          </div>  {/*Ends Gallery Row 4 here*/}

      </div>


       </div>
     )}
   }

export default Gallery
