/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment } from 'react';
import Title from '../../../components/title';
import Text from '../../../components/text';
import StandItemJson from './stand.json';

import SVG from '../../../components/svg';

import './stand.css';

const renderStand = () =>
  StandItemJson.map(item => (
    <Fragment key={item.id}>
      <div class="col-12 col-md-6 mb-4 px-lg-5">
        <div className="d-flex flex-column text-left px-lg-1">
          <div className="d-flex justify-content-start mb-3">
            {renderIcon(item.id)}
          </div>
          <div>
            <Title text={item.title} classNames="sub-title" />
          </div>
          <div>
            <Text text={item.content} classNames="small" />
          </div>
        </div>
      </div>
    </Fragment>
  ));

const renderIcon = id => {
  switch (id) {
    case 1:
      return (
        <img
          src="https://res.cloudinary.com/seamless-africa-fintech/image/upload/v1591918303/simplesetup_acdlvh.png"
          alt="Simple Setup Image"
          srcset=""
        />
      );
    case 2:
      return <SVG name="lowtf" />;
    case 3:
      return <SVG name="savesecure" />;
    case 4:
      return <SVG name="anytime" />;
    default:
      return <SVG name="savesecure" />;
  }
};
const StandItem = () => (
  <div className="row">
    <div className="col-12 col-md-8 order-md-2 px-md-5">
      <div className="row">{renderStand()}</div>
    </div>
    <div className="d-none d-md-block col-md-4 order-md-1 stand-img pt-md-5">
      <img
        src="https://res.cloudinary.com/seamless-africa-fintech/image/upload/v1591298158/eye-for-ebony-OeXcIHFwtsM-unsplash_1_2_zw4fgp.jpg"
        alt="Stand Image"
      />
    </div>
  </div>
);
export default StandItem;
