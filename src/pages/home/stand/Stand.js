import React from 'react';
import Title from '../../../components/title';
import StandItem from './StandItem';
import './stand.css';

const Stand = () => (
  <section className="section-stand section-2-bg">
    <div className="container-fluid pl-md-0">
      <div className="mb-md-3 pt-5 mt-md-5">
        <Title
          text="Why we stand out"
          classNames="title-small text-md-center my-md-5"
        />
      </div>
      <StandItem />
    </div>
  </section>
);

export default Stand;
