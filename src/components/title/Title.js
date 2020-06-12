import React from 'react';
import './title.css';

const Title = ({ text, classNames }) => (
  <p className={`title ${classNames}`}>{text}</p>
);

export default Title;
