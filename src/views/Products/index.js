import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

import HoursContainer from '../../components/HoursContainer'
import StoreInfoContainer from '../../components/StoreInfoContainer'
import './products.css'

class Products extends Component {
  render() {
    return (
       <div id="products_wrapper">
        <div className="col_3">

          <div className="products_description">
            <h1>Shampoos <span className="purp">&</span> Conditioners</h1>
            <img id="shampoos_pic" src={require('../../images/shampoos.png')} alt="Shampoos Picture" style={{width:400, height:400}} />
              <p>Shampoo is arguably your most important haircare product and the foundation for great hair. Here at Shears, we offer a variety of Lanza shampoos so that you can find the hair cleanser that meets your core haircare concern—think sulfate-free shampoo for colored hair, moisturizing shampoo for dry hair, or shampoo for damaged hair—as well as the hair shampoos that help you create different end looks such as volume, shine, or frizz control. And for curly girls, find the best shampoo for your curly hair.
              </p>
              <p className="quote"><i className="fa fa-quote-left" aria-hidden="true"/>&nbsp; As the seasons change, our hair automatically reacts to the weather as well. Frizzy hair in the summer humidity or dry hair in the harsh winter is no good. Koby believes that hair should be treated with the same detail as a designer approaches different types of fabrics. We wouldn’t wash our cashmere clothes the same way as wool or cotton, right? Each fabric will react differently to water temperature, cleansers, and friction. Same is with our hair and product usage!&nbsp; <i className="fa fa-quote-right" aria-hidden="true"/></p>
           </div>

           <div className="products_description">
             <h1>Remington Styling Tools</h1>
             <img id="dryer" src={require('../../images/dryer.png')} alt="Dryer Picture" style={{width:200, height:200}} />
             <img id="curler" src={require('../../images/curler.png')} alt="Curler Picture" style={{width:200, height:200}} />
             <img id="curler_2" src={require('../../images/curler_2.png')} alt="Curler_2 Picture" style={{width:200, height:200}} />
               <p>After years of working in the industry, we have excitedly found the tools we feel work best for stylists and clients. Guaranteed to be the lightest/silent and strongest blow dryer you’ve ever owned, Epic Lite is the blowdryer that will change your hair routine. This lightweight next generation hair dryer purifies the outgoing airflow and fights the aging effects of harmful free radicals caused by carbon dioxide and reduce by 40% your hair dry time.
               In addition to the Epic Lite blow dryer  The rounded plates on this tools make it versatile for straightening stubborn hair, curling or making natural beach waves
               </p>
               <p>We believe in the concept and quality of Remington and therefore offer a full 2 year warranty when purchased through Shears. If you are interested in purchasing an Epic Lite blow dryer, flat iron or combination package for you (or as a gift), we offer guaranteed shipping. Stop by Shears today or contact us at ShearsNYC@gmail.com for more information.</p>
            </div>

        </div>
       </div>
    )}
    }

export default Products
