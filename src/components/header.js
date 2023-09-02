import React from 'react'
import "../css/header.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {

  faFacebookF , faInstagram,
} from '@fortawesome/free-brands-svg-icons';
export default function Header() {
  return (
    <div>
      
  <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <Link to="#" className="navbar-brand">
      <img src="images/logo_1.png" height={48} alt="CoolBrand" />
    </Link>
    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav">
        <Link to="/" className="nav-item nav-link active nav-font">Home</Link>
        
      <div className="nav-item dropdown">
  <Link to="#" className="nav-link dropdown-toggle active nav-font" data-bs-toggle="dropdown">About Us</Link>
  <div className="dropdown-menu">
    <Link to="#" className="dropdown-item nav-font">Teams</Link>
    
  </div>
</div>
<Link style={{fontWeight:"600"}}to="/services" className="nav-item nav-link active nav-font">Services</Link>

     <Link to="/contact" className="nav-item nav-link active nav-font" >Contact Us</Link>
      </div>
      
      <div className='socialtop'>
    <div className="top-social">
               <Link>
                  <Link to="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                  <Link to="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                  </Link>
                </div>
                </div>
    </div>
    
  </div>

</nav>

    </div>
  )
}
