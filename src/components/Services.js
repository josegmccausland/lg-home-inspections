import React from 'react'
import '../App.css'
// import Navigation from './Navigation';
// import { Link, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSign, faWind, faSearch, faSwimmingPool, faConstruction } from '@fortawesome/pro-regular-svg-icons'
// import { faSign, faWind, faSearch, faSwimmingPool, faConstruction } from '@fortawesome/pro-light-svg-icons'

function Services () {
  return (
    <div class='services-content'>
      <div class='page-title'>
        <div class='page-title-text'>
          <h1>Services</h1>
        </div>
      </div>
      <div class='services-bubbles'>
        <div class='services-bubble'>
          <div class='services-bubble-icon'>
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div class='services-bubble-title'>
            <h2>
              4-Point Home Inspection
            </h2>
          </div>
          <div class='services-bubble-text'>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
        <div class='services-bubble'>
          <div class='services-bubble-icon'>
            <FontAwesomeIcon icon={faWind} />
          </div>
          <div class='services-bubble-title'>
            <h2>
              Wind Mitigation
            </h2>
          </div>
          <div class='services-bubble-text'>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
        <div class='services-bubble'>
          <div class='services-bubble-icon'>
            <FontAwesomeIcon icon={faSign} />
          </div>
          <div class='services-bubble-title'>
            <h2>
              Full inspection for a buyer or seller
            </h2>
          </div>
          <div class='services-bubble-text'>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
        <div class='services-bubble'>
          <div class='services-bubble-icon'>
            <FontAwesomeIcon icon={faSwimmingPool} />
          </div>
          <div class='services-bubble-title'>
            <h2>
              Pool inspection
            </h2>
          </div>
          <div class='services-bubble-text'>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
        <div class='services-bubble'>
          <div class='services-bubble-icon'>
            <FontAwesomeIcon icon={faConstruction} />
          </div>
          <div class='services-bubble-title'>
            <h2>
              Inspection in progress of house construction
            </h2>
          </div>
          <div class='services-bubble-text'>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Services
