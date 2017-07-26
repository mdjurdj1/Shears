import React from 'react'
import './hours.css'

const HoursContainer = () => (
  <div id="hours_container">
   <h2>Opening Hours <i className="fa fa-clock-o" aria-hidden="true"></i></h2>
   <p><span className="weekday">Monday</span>: <span className="time">Closed</span></p>
   <p><span className="weekday">Tuesday</span>: <span className="time">9:00am - 5:30pm</span></p>
   <p><span className="weekday">Wednesday</span>: <span className="time">9:00am - 7:30pm</span></p>
   <p><span className="weekday">Thursday</span>: <span className="time">9:00am - 7:30pm</span></p>
   <p><span className="weekday">Friday</span>: <span className="time">9:00am - 7:30pm</span></p>
   <p><span className="weekday">Saturday</span>: <span className="time">10:30am - 6:00pm</span></p>
   <p><span className="weekday">Sunday</span>: <span className="time">Closed</span></p>
  </div>
)

export default HoursContainer
