import React from 'react';
import PropTypes from 'prop-types';

import './input.css';

// Note: add random strings for autocomplete;autocomplete="dontauthocomplete"

const Input = ({
  type,
  name,
  classNames,
  placeholder,
  handleChange,
  handleFocus,
  inputRef,
  accept,
  autoComplete,
  checked,
  value,
  required,
  disabled,
  handleBlur,
}) => {
  const props = value !== undefined ? { value } : {};
  return (
    <input
      data-test="input"
      type={type}
      name={name}
      ref={inputRef}
      accept={accept}
      className={`default rounded ${classNames}`}
      placeholder={placeholder}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
      autoComplete={autoComplete}
      checked={checked}
      required={required}
      disabled={disabled}
    />
  );
};

Input.defaultProps = {
  type: 'text',
  classNames: 'default',
  placeholder: '',
  handleFocus: () => {},
  handleBlur: () => {},
  defaultValue: '',
  inputRef: () => {},
  accept: '',
  autoComplete: 'off',
  checked: false,
  value: '',
  required: false,
  disabled: false,
  handleChange: () => {},
  name: '',
};

Input.propTypes = {
  autoComplete: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  classNames: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  handleBlur: PropTypes.func,
  accept: PropTypes.string,
  checked: PropTypes.bool,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Input;
