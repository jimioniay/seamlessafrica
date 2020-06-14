import React from 'react';

import Title from '../../../components/title';
import Text from '../../../components/text';

const Features = () => (
  <section className="container mb-5">
    <div className="row px-md-5 mb-md-5 align-items-center">
      <div className="col-12 col-md-6 feature order-md-2 mb-5">
        <img
          src="https://res.cloudinary.com/seamless-africa-fintech/image/upload/v1591657095/appint_icinag.png"
          alt="App Interface"
          srcset=""
        />
      </div>
      <div className="col-12 col-md-6 order-md-1 d-flex flex-md-column justify-content-center">
        <div className="row ">
          <div className="col-12 px-md-5">
            <Title classNames="sub-title title-small" text="Make Payment" />
            <Text
              text="With the angu app, customers can easily access their wallet balance and make transfers/send grains to other angu clients free of charge (e.g to a family member in other countries) "
              classNames="small-text"
            />
          </div>
          <div className="col-12 px-md-5">
            <Title classNames="sub-title title-small" text="Buy Grains" />
            <Text
              text="Buy grains from an account in client’s own name using: Local Mobile Money (e.g. OneMoney in Zimbabwe), Paypal email, Debit/Credit Card, Payoneer email, Bank Transfer"
              classNames="small-text"
            />
          </div>
          <div className="col-12 px-md-5">
            <Title classNames="sub-title title-small" text="Accept a Payment" />
            <Text
              text="Use a QR code to accept payments from any other MyAngu client (e.g. at a till) "
              classNames="small-text"
            />
          </div>
          <div className="col-12 px-md-5">
            <Title classNames="sub-title title-small" text="Redeem Grains" />
            <Text
              text="My angu users can easily redeem their grains into their; Paypal email, UK Bank Details, Payoneer email, OneMoney accounts with ease"
              classNames="small-text"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
