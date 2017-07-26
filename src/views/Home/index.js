import React from 'react';
import './home.css'

const Home = () => (
   <div id="home_wrapper">
    <div className="col_1">
      <h1>Our Story</h1>
      <p>Shears Salon was created by brother and sister team, Michael and Hannah Wrynn.</p>
      <p>The business is focused on delivering high-end salon quality services and products, without the high-end attitude... just good natured, knowledgeable professionals performing the services they love.</p>
      <p>We aim to be New Yorks "one-stop-beauty-shop" by offering a full menu of hair, nail. eyelash, skin, and waxing services while having our most trusted products available for our clients to purchase. </p>
      <p>While internal beauty will always reign supreme, we wholeheartedly believe that when people look better on the outside, they feel better on the inside. If we can improve your quality of life through the services we provide, then we have completed our mission. </p>
      <p>You take care of the inner beauty...leave the rest to us. </p>
     </div>

     <div className="col_2">
       <div id="hours_container">
        <h2>Opening Hours</h2>
        <p><span className="weekday">Monday</span>: <span className="time">Closed</span></p>
        <p><span className="weekday">Tuesday</span>: <span className="time">9:00am - 5:30pm</span></p>
        <p><span className="weekday">Wednesday</span>: <span className="time">9:00am - 7:30pm</span></p>
        <p><span className="weekday">Thursday</span>: <span className="time">9:00am - 7:30pm</span></p>
        <p><span className="weekday">Friday</span>: <span className="time">9:00am - 7:30pm</span></p>
        <p><span className="weekday">Saturday</span>: <span className="time">10:30am - 6:00pm</span></p>
        <p><span className="weekday">Sunday</span>: <span className="time">Closed</span></p>
       </div>

       <div id="store_info_container">
        <h2>Shears Salon & Designs</h2>
       </div>
      </div>
   </div>
)

export default Home
