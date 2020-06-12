import React from 'react';

import Header from '../header';
import Footer from '../footer';

import BaseContainer from '../container';

import './base.css';
const Base = ({ children }) => (
  <BaseContainer>
    <Header />
    {children}
    <Footer />
  </BaseContainer>
);

export default Base;
