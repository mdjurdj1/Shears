import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import Modal from 'react-modal'

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
import './gallery.css'

class Gallery extends Component {
  state = {
    modalIsOpen: false,
    current_image: false
  }
  openModal = (src) => {
    this.setState({modalIsOpen: true, current_image: src})
  }
  closeModal = () => {
    this.setState({modalIsOpen: false, current_image: false})
  }
  render() {
    return (
       <div id="gallery_wrapper">

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <div><img src={this.state.current_image} /></div>
        </Modal>

        <div className="col_1">
          <h1>Check out our gallery!</h1>
          <p>Stylist responsible for each look is credited under the photo.</p>
          <div className="responsive">
            <div className="gallery">
                <img onClick={() => this.openModal(img_1_alt)} src={img_1} style={{width:140, height:140}} />
              <div className="desc">Stylist: Aida</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <img onClick={() => this.openModal(img_9)} src={img_9} style={{width:140, height:140}} />
              <div className="desc">Stylist: George</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <img onClick={() => this.openModal(img_6)} src={img_6} style={{width:140, height:140}} />
              <div className="desc">Stylist: Nathalie</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <img onClick={() => this.openModal(img_7)} src={img_7} style={{width:140, height:140}} />
              <div className="desc">Stylist: George</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <img onClick={() => this.openModal(img_4)} src={img_4} style={{width:140, height:140}} />
              <div className="desc">Stylist: Alexis</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <img onClick={() => this.openModal(img_5)} src={img_5} style={{width:140, height:140}} />
              <div className="desc">Stylist: Alexis</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <img onClick={() => this.openModal(img_3)} src={img_3} style={{width:140, height:140}} />
              <div className="desc">Stylist: Alexis</div>
            </div>
          </div>

          <div className="responsive">
            <div className="gallery">
                <img onClick={() => this.openModal(img_8)} src={img_8} style={{width:140, height:140}} />
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
