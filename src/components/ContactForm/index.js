import React from 'react'
import './contact_form.css'

const ContactForm = () => (
  <div id="contact_form">
  <h1>Contact</h1>
    <p className="gmap_address">397 3rd Ave - Between 28th and 29th st. <br/> New York, NY 10016</p>
    <form action="https://formspree.io/shearsNYC@email.com"
        method="POST">
      <span>Your Name(required)</span>
      <input className="input_field" type="text" name="name" size={40} placeholder="Name"/><br />
      <span>Your Email(required)</span>
      <input className="input_field" type="email" name="_replyto" size={40} placeholder="Email"/><br />
      <span>Your Message</span>
      <textarea className="textarea_field" name="message" rows={4} cols={40} maxLength={400} /><br />
      <input type="submit" value="SEND" id="send"/>
    </form>
  </div>
)

export default ContactForm
