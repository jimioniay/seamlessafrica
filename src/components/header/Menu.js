import React from 'react';

import { Link } from 'react-router-dom';

const Menu = () => (
  <nav>
    <ul className="nav-list-block">
      <li className="nav-list--item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
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
      <li className="nav-list--item">
        <Link className="nav-link" href="#">
          Sign Up
        </Link>
      </li>
      <li className="nav-list--item">
        <Link className="nav-link nav-link--login" href="#">
          Login
        </Link>
      </li>
    </ul>
  </nav>
);

export default Menu;
