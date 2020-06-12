import React from 'react';
import Title from '../../../components/title';
import FormBody from './FormBody';

import './form.css';

const Form = () => (
  <section className="section container">
    <div className="form-title mb-5">
      <Title text="Let's talk" classNames="sub-title" />
      <Title
        text="Leave us a message, question and enquiries"
        classNames="sub-title"
      />
    </div>
    <div className="form-body">
      <form onSubmit={() => null}>
        <div className="row justify-content-center ">
          <FormBody />
        </div>
      </form>
    </div>
  </section>
);

export default Form;
