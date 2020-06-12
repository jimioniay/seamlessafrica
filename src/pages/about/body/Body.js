import React from 'react';

import Text from '../../../components/text';
import SVG from '../../../components/svg';

import './body.css';

const Body = () => (
  <section className="container">
    <div className="row">
      <div className="mb-3 px-5 px-md-3 col-12 col-md-3 pt-md-2">
        <div className="img">
          <img
            src="https://res.cloudinary.com/seamless-africa-fintech/image/upload/v1591538937/black_man_1_yp1de4.jpg"
            alt="About-Us-1"
          />
        </div>
      </div>
      <div className="mb-3 d-flex justify-content-center col-12 col-md-4 pt-md-5">
        <div className="img">
          <img
            src="https://res.cloudinary.com/seamless-africa-fintech/image/upload/v1591538851/balck_lady_2_n3wxwv.jpg"
            alt="About-Us-2"
          />
        </div>
      </div>
      <div className="mb-5 col-12 col-md-5 rounded d-flex justify-content-center">
        <div className="img">
          <img
            src="https://res.cloudinary.com/seamless-africa-fintech/image/upload/v1591538971/lady_on_bench_yunnd0.jpg"
            alt="About-Us-3"
          />
        </div>
      </div>
      <div className="mt-5 mb-3 col-12">
        <div className="">
          <Text text="Exhaustive intellectual, legal and market research has been done over a number of years to determine what Zimbabwe and the region needs in order to enjoy the economic growth that it has a right to. MyAngu is the result of this work." />
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row pl-md-3">
        <div className="mb-3 mr-md-5">
          <SVG name="checkbox" />
          <Text
            text="Send grains to family and friends"
            classNames="bold d-inline ml-4"
          />
        </div>
        <div className="mb-3 mr-md-5">
          <SVG name="checkbox" />
          <Text text="Save in a secure way" classNames="bold d-inline ml-4" />
        </div>
        <div className="mb-3 mr-md-5">
          <SVG name="checkbox" />
          <Text
            text="Spend grains at participating retailers"
            classNames="bold d-inline ml-4"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Body;
