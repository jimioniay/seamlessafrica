import React from 'react';
import { Container } from '../../../components/container/Container';
import Title from '../../../components/title';
import Text from '../../../components/text';
import SVG from '../../../components/svg';

import './works.css';

const Works = () => (
  <section className="section mb-5">
    <Container>
      <div className="works p-2 p-md-4">
        <div className="d-flex flex-column align-content-start align-items-md-center">
          <div className="text-center">
            <Title
              text="HOW IT WORKS"
              classNames="title-small text-white d-md-inline mr-md-4"
            />
            <span className="d-none d-md-inline pushpin">
              <SVG name="pushpin" />
            </span>
          </div>
          <div className="row">
            <div className="col-12 px-md-5 col-md-4 mb-4">
              <Title text="01" classNames="works-count" />
              <Title
                text="Downlaod App & create an account"
                classNames="works-item"
              />
              <Text
                text="It’s fast and easy, to setup an account with us, in minutes your account should be up and running."
                classNames="small text-white"
              />
            </div>
            <div className="col-12 px-md-5 dip col-md-4 mb-4">
              <Title text="02" classNames="works-count" />
              <Title
                text="Deposit Money/Fund Your Wallet App"
                classNames="works-item"
              />
              <Text
                text="Deposit money into your wallet using the app which is then converted into Angu Vouchers called grains."
                classNames="small text-white"
              />
            </div>
            <div className="col-12 px-md-5 col-md-4 mb-4">
              <Title text="03" classNames="works-count" />
              <Title text="Start Transactions" classNames="works-item" />
              <Text
                text="Job done, you can now enjoying the benefit of! Start transacting, send grains, make payments and save."
                classNames="small text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default Works;
