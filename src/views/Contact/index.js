import React, { Component } from 'react'
import GettingStartedGoogleMap from '../../components/GoogleMap'
import './contact.css'

class Contact extends Component {
  state = {
    markers:[{
      position:{
        lat: 40.741750,
        lng: -73.980208,
      }
    }]
  }
  render() {
    return (
      <div id="contact_wrapper">
        <div id="contact_container">
          <p><span className="contact_heading">CALL US!</span><br/>
            <i className="fa fa-mobile" aria-hidden="true"/>  Chatham: (518) 392-3550 <br /> <i className="fa fa-mobile" aria-hidden="true"/>  Manhattan: (212) 219-3195</p>
          <p><span className="contact_heading">GENERAL INQUIRIES:</span> <br/>
            <i className="fa fa-envelope-o" aria-hidden="true"/>  shearsNYC@gmail.com</p>
          <p><span className="contact_heading">JOIN THE TEAM:</span> <br/>
            shearsNYCartists@gmail.com</p>
          <p><span className="contact_heading">BUSINESS PARTNERSHIP:</span> <br/>
            shearsNYCbusiness@gmail.com</p>
          <p><span className="contact_heading">GIFTCARDS PURCHASE:</span> <br/>
            shearsNYCgiftcards@gmail.com</p>
        </div>

        <div id="google_map_container">
         <GettingStartedGoogleMap
           googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.28"
           containerElement={ <div style={{ height: `100%` }} /> }
           mapElement={<div style={{ height: `100%` }} />}
            markers={this.state.markers}
         />
       </div>,
      </div>
    )
  }
}

export default Contact
