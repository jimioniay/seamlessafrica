import React, { useState, useRef } from 'react';

import Base from '../../components/base';
import Input from '../../components/input';
import Title from '../../components/title';
import SVG from '../../components/svg';

import Answers from './answers/Answers';

import QuestionsJson from './questions.json';
import './faq.css';

const FAQ = () => {
  const questionBodyRef = useRef(null);
  const [questions, setQuestions] = useState([
    {
      id: 1,
      show: false,
    },
    {
      id: 2,
      show: false,
    },
    {
      id: 3,
      show: false,
    },
    {
      id: 4,
      show: false,
    },
    {
      id: 5,
      show: false,
    },
    {
      id: 6,
      show: false,
    },
    {
      id: 7,
      show: false,
    },
    {
      id: 8,
      show: false,
    },
    {
      id: 9,
      show: false,
    },
    {
      id: 10,
      show: false,
    },
    {
      id: 11,
      show: false,
    },
    {
      id: 12,
      show: false,
    },
    {
      id: 13,
      show: false,
    },
  ]);

  const handleClick = id =>
    setQuestions(prevState =>
      prevState.map(item =>
        item.id === id ? { ...item, show: !item.show } : item,
      ),
    );

  const renderQuestions = () =>
    QuestionsJson.map(item => (
      <div
        ref={questionBodyRef}
        className="question"
        onClick={() => handleClick(item.id)}
      >
        <div className="question-head">
          <span className="question-title">{item.question}</span>
          <div className="question-icon">
            {questions[item.id - 1].show ? (
              <SVG name="select" />
            ) : (
              <SVG name="select" className="up" />
            )}
          </div>
        </div>
        {questions[item.id - 1].show && (
          <div className="question-body">
            {item.answer || <Answers id={item.id} />}
          </div>
        )}
      </div>
    ));
  return (
    <Base>
      <section className="section">
        <div className="container px-2 faq-header">
          <div className="py-5 p-md-5">
            <div className="d-flex flex-column justify-content-md-center p-3 p-md-5">
              <Title
                text="FREQUENTLY ASKED QUESTIONS"
                classNames="faq-title text-md-center text-white mb-2 mb-md-4"
              />
              <Input
                classNames="mx-auto w-100"
                placeholder="Search a question"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section mb-md-3">
        <div className="container">
          <div classNames="p-md-5 p-3 ">
            <div>{renderQuestions()}</div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default FAQ;
