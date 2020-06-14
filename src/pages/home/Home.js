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
    <div className="mb-md-5 invisible">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
      repellendus totam assumenda soluta, tempore atque quasi praesentium, hic
      fuga consequatur odit magni alias esse ut cum, quam laboriosam molestiae
      voluptates.
    </div>
  </Base>
);

export default Home;
