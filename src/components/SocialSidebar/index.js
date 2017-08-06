import React from 'react'
import './sidebar.css'

const Sidebar = () => (
  <aside id="sticky-social">
    <ul>
        <li><a href="#" className="entypo-facebook" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i><span>Facebook</span></a></li>
        <li><a href="#" className="entypo-twitter" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i><span>Twitter</span></a></li>
        <li><a href="#" className="entypo-gplus" target="_blank">  <i className="fa fa-google-plus" aria-hidden="true"></i><span>Google+</span></a></li>
        <li><a href="#" className="entypo-pinterest" target="_blank"><i className="fa fa-pinterest-p" aria-hidden="true"></i><span>Pinterest</span></a></li>
        <li><a href="#" className="entypo-instagrem" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i><span>Instagram</span></a></li>
    </ul>
</aside>
)

export default Sidebar
