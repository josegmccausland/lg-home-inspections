import React from 'react'
import '../App.css'
import condopic from '../assets/condo.svg'
// import building from '../assets/building.svg'
// import { Link, withRouter } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBuilding, faHouse } from '@fortawesome/pro-regular-svg-icons'

function PricingCondos () {
  return (
    <div class='pricing-content'>
      <div class='page-title'>
        <div class='page-title-text'>
          <h1>Condominium Inspections</h1>
        </div>
      </div>
      <div class='pricing-sfh-body'>
        <div class='pricing-sfh-chart'>
          <div class='pricing-sfh-chart-column'>
            <div class='pricing-sfh-chart-column-info'>
              <p>Up to 1,000 sqft</p>
            </div>
            <div class='pricing-sfh-chart-column-price'>
              <h2>$225</h2>
            </div>
          </div>
          <div class='pricing-sfh-chart-column'>
            <div class='pricing-sfh-chart-column-info'>
              <p>1,001 - 1,999 sqft</p>
            </div>
            <div class='pricing-sfh-chart-column-price'>
              <h2>$275</h2>
            </div>
          </div>
          <div class='pricing-sfh-chart-column'>
            <div class='pricing-sfh-chart-column-info'>
              <p>2,000 - 2,999 sqft</p>
            </div>
            <div class='pricing-sfh-chart-column-price'>
              <h2>$325</h2>
            </div>
          </div>
          <div class='pricing-sfh-chart-column'>
            <div class='pricing-sfh-chart-column-info'>
              <p>3,000+ sqft</p>
            </div>
            <div class='pricing-sfh-chart-column-price'>
              <h2>Call</h2>
            </div>
          </div>
        </div>
      </div>
      <div class='pricing-bottom-section'>
        <div class='pricing-sfh-picture'>
          <img src={condopic} alt='condo' />
        </div>
        <div class='pricing-sfh-text'>
          <h2>Need Extra Services?</h2>
          <p>Please call for a quote if you are also in need of a 4-point Home Inspection or Wind Mitigation.</p>
          <p>Ask for our huge discount when ordered with a full condo inspection!</p>
        </div>
      </div>
    </div>
  )
}
export default PricingCondos
