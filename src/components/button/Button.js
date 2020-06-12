import React from 'react';
import './button.css';

const Button = ({ children, classNames, handleClick }) => (
  <button onClick={handleClick} className={`btn btn-primary ${classNames}`}>
    {children}
  </button>
);

export default Button;
