import React, { useState } from 'react';
import Text from '../../../components/text';
import Input from '../../../components/input';
import Button from '../../../components/button';

import FormJson from './form.json';

const FormBody = () => {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    country: '',
    enquiries: '',
    checked: false,
  });
  const handleChange = event => {
    const { name, value, checked, type } = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  const renderForm = () =>
    FormJson.map(item => (
      <div className={item.className} key={item.id}>
        <Text text={item.label} classNames="default-text" />
        <Input
          name={item.name}
          type={item.type}
          placeholder={item.placeholder}
          classNames={`form mt-1 mb-3 w-100 ${item.type === 'textarea' &&
            'textarea'}`}
          handleChange={handleChange}
          value={state[item.name]}
          defaultValue={state[item.name]}
        />
      </div>
    ));

  const handleClick = () => {};
  return (
    <>
      {renderForm()}
      <div className="col-12 d-flex flex-column flex-md-row justify-content-md-between">
        <div className="">
          <Input
            name={state.checked}
            type="checkbox"
            classNames="checkbox mr-3 mb-4 "
            handleChange={handleChange}
            value={state.checked}
          />
          <p className="muted d-inline">
            I agree to the terms of Seamless African Fintech's Privacy Policy.
          </p>
        </div>
        <Button handleClick={handleClick} classNames="wd-100 wd-md-25">
          Submit
        </Button>
      </div>
    </>
  );
};

export default FormBody;
