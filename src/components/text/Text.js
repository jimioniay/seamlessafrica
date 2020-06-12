import React from 'react';
import './text.css';

const Text = ({ text, classNames, children }) => (
  <p className={`text   ${classNames}`}>{text || children}</p>
);

export default Text;
