import React from 'react';

import Title from '../../../components/title';
import Text from '../../../components/text';

const Header = () => (
  <section className="section mb-md-3">
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="about-title">
          <Title text="About Us" classNames="title" />
        </div>
        <div className="about-title intro justify-content-center">
          <Text
            text="A financial ecosystem in a mobile app based on secure digital vouchers. The My Angu app allows you to deposit money into the App that is then converted into Angu Vouchers, called Grains. You can then use those Grains, via the My Angu app to carry out various transactions"
            classNames="text-center text-wrap"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Header;
