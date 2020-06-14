import React from 'react';

import Title from '../../../components/title';
import Text from '../../../components/text';

import './remit.css';

const Remit = () => (
  <section className="container-fluid mb-5 remit-container pr-md-1 pt-md-5 ">
    <div className="row px-md-5">
      <div className="col-12 col-md-6 px-md-5">
        <Title
          text="REMMITANCE SAVINGS & IMPORTS"
          classNames="sub-title blue"
        />
        <Text
          text="The app allows you bypass the black market or headline remittance companies to get money to them, then this is the app for you.  It allows you to send funds to friends and family, or pay for things directly in participating retailers."
          classNames="small-text mb-3 pr-md-5"
        />
        <Text
          text="MyAngu benefits from continuous world-class encryption built to bring covienience to the way people save money, send money and also make payments for goods."
          classNames="small-text mb-3 pr-md-5"
        />
        <Text
          text="For added comfort, it should be noted that no money is actually being moved by the app itself and we have mechanisms in place to ensure that no one can access your Angu account. Great care is taken whenever a client wishes to redeem grains, ensuring their identity and legitimacy."
          classNames="small-text mb-3 pr-md-5"
        />
      </div>
      <div className="remit-image col-12 col-md-6 px-md-0 mb-5 pr-md-3">
        <img
          src="https://res.cloudinary.com/seamless-africa-fintech/image/upload/v1591659045/remittance_and_saving_image_f4clce.jpg"
          alt=""
          srcset=""
        />
      </div>
    </div>
  </section>
);

export default Remit;
