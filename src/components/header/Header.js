import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Menu from './Menu';
import SVG from '../svg';
import './header.css';

const Nav = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <header className="header sticky-top">
      <div className="container">
        <nav className="header-navbar">
          <Link to="/" className="logo">
            <img
              src="https://res.cloudinary.com/seamless-africa-fintech/image/upload/v1592485599/logo_transparent_xxovxf.png"
              alt="Bruggen Logo"
              srcset=""
              className="mb-0 p-0"
            />
          </Link>
          <div className="header-menu" onClick={handleClick}>
            <SVG name="harmburger" />
          </div>
          <ul className="nav-list">
            <div className="nav-list-1">
              <li className="nav-list--item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-list--item">
                <Link className="nav-link" to="/faq">
                  FAQ
                </Link>
              </li>
              <li className="nav-list--item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </div>
            <div className="nav-list-2">
              <li className="nav-list--item">
                <Link className="nav-link nav-link--login" href="#">
                  Login
                </Link>
              </li>
              <li className="nav-list--item">
                <Link className="nav-link" href="#">
                  Sign Up
                </Link>
              </li>
            </div>
          </ul>
        </nav>
        {show && <Menu />}
      </div>
    </header>
  );
};
export default Nav;
