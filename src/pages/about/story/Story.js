import React from 'react';

import Text from '../../../components/text';
import Title from '../../../components/title';

import './story.css';
const Story = () => (
  <section className="section container">
    <Title text="Our Story and Team" classNames="title-small" />
    <div className="row">
      <div className="col-12 mb-md-5">
        <div className="row">
          <div className="col-6 col-md-3 mb-3">
            <div className="image">
              <img
                src="https://res.cloudinary.com/seamless-africa-fintech/image/upload/v1591541084/farley_1_tb8q6e.jpg"
                alt="story-1"
              />
            </div>
          </div>
          <div className="col-12 col-md-9">
            <Text text="David Farley" classNames="bold" />
            <Text text="CEO and Founder" classNames="bold" />
            <Text
              text="An economics graduate of Durham University in England, David Farley spent 15 years working as an investment banker in the City of London, as a rating advisor. He started his career at Chase Manhattan (since JPMorgan), before going onto Commerzbank and then finally building and running the department for Standard Bank of South Africa. During his career he advised governments, companies and banks (both commercial and multilateral) across both developed and emerging markets, increasingly focusing on Africa in his time at Standard Bank. After advising clients such as Rwanda, Namibia, PTA Bank and Econet, David developed a keen insight into the economy of Africa, its interaction with the West and the broader problems in Western finance that led to the financial crisis of 2008/9 and consequent extraordinary monetary policies of global central banks. This led to the development of MY ANGU, which is designed to not only protect Zimbabwe and Africa from those extraordinary policies but to completely set free their economic potential."
              classNames="smaller"
            />
          </div>
        </div>
      </div>
      <div className="col-12 mb-md-5">
        <div className="row">
          <div className="col-6 col-md-3 mb-3 mb-md-5">
            <div className="image">
              <img
                src="https://res.cloudinary.com/seamless-africa-fintech/image/upload/v1591542598/mark_trinick_kxdqrx.jpg"
                alt="story-2"
              />
            </div>
          </div>
          <div className="col-12 col-md-9">
            <Text text=" Mark Trinick" classNames="bold" />
            <Text text="Co Founder" classNames="bold" />
            <Text
              text="Mark is a lover of all things technical! He has a degree in Electrical & Electronic Engineering and is now a Software Engineer. David needed help and Mark didn’t think twice about jumping in and helping one of his closest friends to get it up and running! Mark is responsible for all things technical in MyAngu."
              classNames="smaller"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Story;
