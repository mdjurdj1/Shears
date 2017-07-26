import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Home from './views/Home'
import Navbar from './components/Navbar'
import './App.css';

const App = () => (
      <Router>
        <div className="App">
          <div className="App-header">
            <h1>Shears</h1>
            <h2>Independant Hair Designers</h2>
            <hr />
          </div>

          <Navbar />
          <div id="content_wrapper">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={Home} />
              <Route path="/skills" component={Home} />
              <Route path="/work" component={Home} />
              <Route path="/contact" component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
  )

export default App;
