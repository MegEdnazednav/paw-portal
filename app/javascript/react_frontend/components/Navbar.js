import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png'

import './Navbar.scss'

class Navbar extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav-logo">
          <Link to="/" className="">
            <img src={logo} alt="Logo" className="logo-main" />
          </Link>
        </div>

        <div className="nav-list">
          <div className="nav-item">
            <Link className="nav-link" to="/">HOME</Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link" to="/">ABOUT US</Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link" to="/">CONTACT</Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link" to="/">VOLUNTEER</Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link" to="/">LOG IN</Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar
