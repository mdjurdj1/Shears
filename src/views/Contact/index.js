import React, { Component } from 'react'
import './contact.css'

class Contact extends Component {
  state = {
    markers: {}
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
        </div>
      </div>
    )
  }
}

export default Contact
