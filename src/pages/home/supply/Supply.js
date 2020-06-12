import React from 'react';
import Title from '../../../components/title';
import Text from '../../../components/text';
import Suppliers from './Suppliers';

import './supply.css';

const Supply = () => (
  <section className="section">
    <div className="container">
      <div className="margin d-flex flex-column">
        <div>
          <Title
            text="Our Supply Partners"
            classNames="title-small text-md-center"
          />
          <Text
            text="Our system is backed by key industry players to deliver seamless services"
            classNames="big text-md-center"
          />
        </div>
      </div>
      <Suppliers />
    </div>
  </section>
);
export default Supply;
