import React from 'react';

import Base from '../../components/base';
import Land from './land';
import Stand from './stand';
import Supply from './supply';
import Features from './features';
import Works from './works';
import Store from './store';
import Remit from './remit';

const Home = () => (
  <Base>
    <Land />
    <Stand />
    <Supply />
    <Features />
    <Works />
    <Remit />
    <Store />
    <div className="mb-5">;&nbsp;</div>
  </Base>
);

export default Home;
