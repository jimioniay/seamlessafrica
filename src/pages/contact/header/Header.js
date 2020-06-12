import React from 'react';

import Title from '../../../components/title';
import './header.css';

const Header = () => (
  <section className="section container mb-4">
    <div className="img position-relative">
      <img
        src="https://res.cloudinary.com/seamless-africa-fintech/image/upload/v1591548045/utsman-media-g4I_Lq-p4o0-unsplash_1_trirvm.png"
        alt="About-Us-1"
      />
      <div className="position-absolute justify-title">
        <Title text="Contact Us" />
      </div>
    </div>
  </section>
);

export default Header;
