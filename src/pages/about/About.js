import React from 'react';
import Base from '../../components/base';
import Store from '../../components/store';

import Header from './header';
import Body from './body';
import Story from './story';

const About = () => (
  <Base>
    <Header />
    <Body />
    <Story />
    <Store />
    <div className="mb-md-5 invisible">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
      repellendus totam assumenda soluta, tempore atque quasi praesentium, hic
      fuga consequatur odit magni alias esse ut cum, quam laboriosam molestiae
      voluptates.
    </div>
  </Base>
);

export default About;
