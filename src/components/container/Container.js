import React from 'react';

import './container.css';

const BaseContainer = ({ children }) => (
  <div className="base-container base">{children}</div>
);

export const Container = ({ children }) => (
  <div className="container">
    <div className="row">{children}</div>
  </div>
);

export const Column = ({ children, classNames }) => (
  <div className={`${classNames}`}>{children}</div>
);
export default BaseContainer;
