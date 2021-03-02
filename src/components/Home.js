import React from 'react'
import '../App.css'
import inspector from '../assets/inspector.jpg'
// import Navigation from './Navigation';
import { Link, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSign, faWind, faSearch } from '@fortawesome/pro-regular-svg-icons'

function Home () {
  return (

    <div class='content'>
      <div class='home-banner'>
        <div class='banner-container'>
          <div class='banner-content'>
            <span>Quality Home Inspections</span>
            <p>Rigorous and precise inspections servicing central Florida.</p>
            <Link to='/services'><div class='banner-button'>Services</div></Link>
          </div>
        </div>
      </div>
      <div class='home-services'>
        <div class='home-bubbles'>
          <div class='home-services-bubble'>
            <div class='bubble-icon'>
              <FontAwesomeIcon icon={faSearch} />
            </div>
            <div class='bubble-title'>
              <h2>4-point Inspection</h2>
            </div>
            <div class='bubble-text'>
              <p>Inspection looking at the 4 major systems: Roof, Electrical, Plumbing, and HVAC</p>
            </div>
          </div>
          <div class='home-services-bubble'>
            <div class='bubble-icon'>
              <FontAwesomeIcon icon={faWind} />
            </div>
            <div class='bubble-title'>
              <h2>Wind Mitigation</h2>
            </div>
            <div class='bubble-text'>
              <p>Inspection that checks your home’s wind-resistant features including doors, windows and the roof.</p>
            </div>
          </div>
          <div class='home-services-bubble'>
            <div class='bubble-icon'>
              <FontAwesomeIcon icon={faSign} />
            </div>
            <div class='bubble-title'>
              <h2>Buyer/Seller Inspections</h2>
            </div>
            <div class='bubble-text'>
              <p>Inspection for a seller or buyer of a home that occurs previous to either listing or closing on a sale.</p>
            </div>
          </div>
        </div>
      </div>
      <div class='home-about-container'>
        <div class='home-about'>
          <div class='home-about-picture'>
            <img src={inspector} className='home-about-pic' alt='logo' />
          </div>
          <div class='home-about-text'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>

      </div>
    </div>
  )
}
export default withRouter(Home)
