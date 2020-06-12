import React from 'react';

import Text from '../text';
import SVG from '../svg';

import './store.css';

const Store = () => (
  <section className="section container mb-5">
    <div className="bg py-5 px-2">
      <div className="d-flex flex-column">
        <div className="text-center">
          <Text text="Over 5000 users in 3 different countries are enjoying our service" />
        </div>
        <div className="text-center">
          <Text text="Download now and start transacting" classNames="tiny" />
        </div>
        <div>
          <div className="d-flex flex-column justify-content-center align-items-center flex-md-row">
            <div className="android">
              <SVG name="android" />
            </div>
            <div className="ios">
              <SVG name="ios-store" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Store;
