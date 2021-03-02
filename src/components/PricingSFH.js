import React from 'react'
import housepic from '../assets/home.svg'
import '../App.css'
// import { Link, withRouter } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBuilding, faHouse } from '@fortawesome/pro-regular-svg-icons'

function PricingSFH () {
  return (
    <div class='pricing-content'>
      <div class='page-title'>
        <div class='page-title-text'>
          <h1>Single Family Home Inspections</h1>
        </div>
      </div>
      <div class='pricing-sfh-body'>
        <div class='pricing-sfh-chart'>
          <div class='pricing-sfh-chart-column'>
            <div class='pricing-sfh-chart-column-info'>
              <p>Up to 2,000 sqft</p>
            </div>
            <div class='pricing-sfh-chart-column-price'>
              <h2>$325</h2>
            </div>
          </div>
          <div class='pricing-sfh-chart-column'>
            <div class='pricing-sfh-chart-column-info'>
              <p>2,001 - 2,999 sqft</p>
            </div>
            <div class='pricing-sfh-chart-column-price'>
              <h2>$375</h2>
            </div>
          </div>
          <div class='pricing-sfh-chart-column'>
            <div class='pricing-sfh-chart-column-info'>
              <p>3,000 - 3,999 sqft</p>
            </div>
            <div class='pricing-sfh-chart-column-price'>
              <h2>$425</h2>
            </div>
          </div>
          <div class='pricing-sfh-chart-column'>
            <div class='pricing-sfh-chart-column-info'>
              <p>4,000 - 4,999 sqft</p>
            </div>
            <div class='pricing-sfh-chart-column-price'>
              <h2>$475</h2>
            </div>
          </div>
          <div class='pricing-sfh-chart-column'>
            <div class='pricing-sfh-chart-column-info'>
              <p>5,000+ sqft</p>
            </div>
            <div class='pricing-sfh-chart-column-price'>
              <h2>Call</h2>
            </div>
          </div>
        </div>
      </div>
      <div class='pricing-bottom-section'>
        <div class='pricing-sfh-picture'>
          <img src={housepic} alt='house' />
        </div>
        <div class='pricing-sfh-text'>
          <h2>Need Extra Services?</h2>
          <p>Please call for a quote if you are also in need of a 4-point Home Inspection or Wind Mitigation.</p>
          <p>Ask for our huge discount when ordered with a full home inspection!</p>
        </div>
      </div>
    </div>
  )
}
export default PricingSFH
