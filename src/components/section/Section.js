import React from 'react';

import './section.css';

const Section = ({ children, classNames }) => (
  <div className={`section ${classNames}`}>{children}</div>
);

export default Section;
