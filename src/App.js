import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './views/Home'
import Rates from './views/Rates'
import Gallery from './views/Gallery'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css';

const App = () => (
      <Router>
        <div className="App">
          <div className="App-header">
            <h1><span className="pink">S</span>hear<span className="pink">s</span></h1>
            <h2>Salon & Designs</h2>
            <hr />
            <button id="make_appt"><i className="fa fa-scissors" aria-hidden="true"/>&nbsp; Make an online appointment</button>
          </div>

          <Navbar />
          <div id="content_wrapper">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/rates" component={Rates} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/contact" component={Home} />
            </Switch>
          </div>

          <Footer />
        </div>
      </Router>
  )

export default App;
