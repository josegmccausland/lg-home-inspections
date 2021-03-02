import React from 'react'
import logo from '../assets/lg-logo.jpg'
import { Link, withRouter } from 'react-router-dom'

function Navigation (props) {
  return (
    <header className='App-header'>
      <div className='Header-logo'>
        <Link to='/'><img src={logo} className='App-logo' alt='logo' /> </Link>
        <h1 class='Header-company-name'> <Link to='/'>L</Link><Link to='/'>G</Link><Link to='/'> Quality Home Inspections, LLC</Link></h1>
      </div>
      <div class='Header-navbar'>
        <nav>
          <ul class='nav'>
            <li class={`nav-item-${props.location.pathname === '/' ? 'active' : ''
              }`}
            >
              <Link to='/'>Home</Link>
            </li>
            <li class={`nav-item-${props.location.pathname === '/services' ? 'active' : ''
              }`}
            >
              <Link to='/services'>Services</Link>
            </li>
            <li class={`nav-item-${props.location.pathname === '/pricing' ? 'active' : ''
              }`}
            >
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li class={`nav-item-${props.location.pathname === '/contact' ? 'active' : ''
              }`}
            >
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default withRouter(Navigation)
