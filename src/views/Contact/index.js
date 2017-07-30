import React, { Component } from 'react'
import GettingStartedGoogleMap from '../../components/GoogleMap'
import './contact.css'

const FaSpinner = () => (
  <div></div>
)

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
          <p>CALL US:</p>
          <p>(518) 392-3550 OR (212) 219-3195</p>
          <p>GENERAL INQUIRIES: <br/>
            shearsNYC@gmail.com</p>
          <p>JOIN THE TEAM: <br/>
            shearsNYCartists@gmail.com</p>
          <p>BUSINESS PARTNERSHIP: <br/>
            shearsNYCbusiness@gmail.com</p>
          <p>GIFTCARDS PURCHASE: <br/>
            shearsNYCgiftcards@gmail.com</p>
        </div>

        <div id="google_map_container">
         <GettingStartedGoogleMap
           googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.28"
           loadingElement={
             <div style={{ height: `100%` }}>
              <FaSpinner
                style={{
                display: `block`,
                width: `80px`,
                height: `80px`,
                margin: `150px auto`,
                animation: `fa-spin 2s infinite linear`,
              }} /> </div> }
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
