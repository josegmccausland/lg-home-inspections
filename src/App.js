import React from 'react'
// import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import { Home, Services, Footer, Navigation, Pricing, PricingSFH, PricingCondos, ContactForm } from './components'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faApple, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

function App () {
  return (
    <div class='App'>
      <HashRouter>
        <Navigation />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Services} />
          <Route path='/pricing' exact component={Pricing} />
          <Route path='/pricing/single-family-homes' exact component={PricingSFH} />
          <Route path='/pricing/condominiums' exact component={PricingCondos} />
          <Route path='/contact' exact component={ContactForm} />
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
