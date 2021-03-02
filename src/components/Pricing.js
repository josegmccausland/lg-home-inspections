import React from 'react'
import '../App.css'
import { Link, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faHouse } from '@fortawesome/pro-regular-svg-icons'

function Pricing () {
  return (
    <div class='pricing-content'>
      <div class='page-title'>
        <div class='page-title-text'>
          <h1>Pricing</h1>
        </div>
      </div>
      <div class='pricing-bubbles'>
        <Link to='/pricing/single-family-homes' class='pricing-bubble'>
          <div class='pricing-bubble-icon'>
            <FontAwesomeIcon icon={faHouse} />
          </div>
          <div class='pricing-bubble-title'>
            <h2>Single Family Home</h2>
          </div>
        </Link>
        <Link to='/pricing/condominiums' class='pricing-bubble'>
          <div class='pricing-bubble-icon'>
            <FontAwesomeIcon icon={faBuilding} />
          </div>
          <div class='pricing-bubble-title'>
            <h2>Condominiums</h2>
          </div>
        </Link>
      </div>
    </div>
  )
}
export default withRouter(Pricing)
