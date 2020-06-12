import React from 'react';

import Title from '../../../components/title';
import Text from '../../../components/text';
import Button from '../../../components/button';
import SVG from '../../../components/svg';

import './land.css';

const Land = () => (
  <section className="section section-hero">
    <div className="container">
      <div className="row justify-content-between">
        <div className="col-12 col-md-6 px-md-5">
          <div className="mb-4">
            <Title text="A seamless and cheaper voucher based money transfer & payment experience" />
          </div>
          <div className="mb-5">
            <Text
              text="We designed a robust solution that enables you make voucher based
              money transfer and payments, signup and fund your virtual wallet
              and start transacting with ease."
            />
          </div>
          <div className="row">
            <div className="col-12 col-md-6 pr-md-0">
              <Button classNames="w-100">Submit</Button>
            </div>
            <div className="d-none col d-md-block col-md-2 px-md-0">
              <SVG name="arrow" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <img
            src="https://res.cloudinary.com/seamless-africa-fintech/image/upload/v1591785262/balance_r980ob.png"
            alt=""
            srcset=""
            className="hero-image"
          />

          <img
            src="https://res.cloudinary.com/seamless-africa-fintech/image/upload/v1591785262/hero_w4jydt.png"
            alt="SAF Hero"
            className="hero-image"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Land;
