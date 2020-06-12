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
  </Base>
);

export default About;
