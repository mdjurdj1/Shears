import React, { Component } from 'react'
import GettingStartedGoogleMap from '../../components/GoogleMap'
import ContactForm from '../../components/ContactForm'
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
         <div id="contacts_and_gmap_container">  {/*TOP ROW container begins here*/}
          <ContactForm />
          <div id="google_map_container">
           <GettingStartedGoogleMap
             googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.28"
             containerElement={ <div style={{ height: `100%`, width: `800px` }} /> }
             mapElement={<div style={{ height: `100%`, width: `800px` }} />}
              markers={this.state.markers}
           />
         </div>
       </div> {/*TOP ROW container ends here*/}

       <div id="contact_container">
          <div className="section">
            <p className="contact_heading">MANHATTAN LOCATION:</p>
            <p><i className="fa fa-mobile" aria-hidden="true"/>(212) 219-3195 </p>
            <p>397 E 3rd Avenue - Between 28th and 29th <br/>Manhattan, NY 10016 </p> <br />

            <p className="contact_heading">CHATHAM LOCATION:</p>
            <p><i className="fa fa-mobile" aria-hidden="true"/>  (518) 392-3550 </p>
            <p>51 Church St. <br/>Chatham, NY 12037 </p>
          </div>

          <div className="section_two">
             <p className="contact_heading">GENERAL INQUIRIES: </p>
             <p className="contact_email"><i className="fa fa-envelope-o" aria-hidden="true"/>  shearsNYC@gmail.com</p>
             <p className="contact_heading">JOIN THE TEAM: </p>
             <p className="contact_email"><i className="fa fa-envelope-o" aria-hidden="true"/> shearsNYCartists@gmail.com</p>
             <p className="contact_heading">BUSINESS PARTNERSHIP:</p>
             <p className="contact_email"><i className="fa fa-envelope-o" aria-hidden="true"/> shearsNYCbusiness@gmail.com</p>
             <p className="contact_heading">GIFTCARDS PURCHASE: </p>
             <p className="contact_email"><i className="fa fa-envelope-o" aria-hidden="true"/> shearsNYCgiftcards@gmail.com</p>
          </div>

          <div className="section_two">
             <p className="contact_heading">SUBSCRIBE: </p>
             <p>Sign up to receive updates and exclusive offers.</p>
             <form>
              <input type="text" placeholder="Email Address" id="sub_email" />
              <a href="#signup"><input type="submit" value="SIGN UP" id="sign_up"/></a>
             </form>
             <p id="privacy">We respect your privacy.</p>
          </div>
       </div>

      </div>
    )
  }
}

export default Contact
