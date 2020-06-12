import React from 'react';
import './button.css';

const CustomButton = ({ children, classNames }) => (
  <button className={`btn btn-primary rounded ${classNames}`}>
    {children}
  </button>
);

export default CustomButton;
