import React from 'react';
import { Link } from 'react-router-dom';

import Title from '../../components/title';
import Text from '../../components/text';
import SVG from '../svg';

import './footer.css';

const Footer = () => (
  <footer className="bg">
    <div className="container py-5 mt-md-5">
      <div className="row">
        <div className="col-12 col-md-9 order-md-2">
          <div className="d-flex flex-column flex-md-row justify-content-around align-items-center align-items-md-start">
            <div className="d-flex flex-column justify-content-center mb-3">
              <Title text="Products" classNames="sub-title" />
              <Link to="/" className="text-decoration-none">
                <Text text="My Angu" classNames="tiny text" />
              </Link>
            </div>
            <div className="d-flex flex-column justify-content-center mb-3">
              <Title text="Company" classNames="sub-title" />
              <Link to="/" className="text-decoration-none">
                <Text text="About" classNames="tiny" />
              </Link>
              <Link to="/" className="text-decoration-none">
                <Text text="Partners" classNames="tiny" />
              </Link>
              <Link to="/" className="text-decoration-none">
                <Text text="Careers" classNames="tiny" />
              </Link>
              <Link to="/" className="text-decoration-none">
                <Text text="Legal & Policy" classNames="tiny" />
              </Link>
              <Link to="/" className="text-decoration-none">
                <Text text="Support" classNames="tiny" />
              </Link>
            </div>
            <div className="d-flex flex-column justify-content-center mb-3">
              <Title
                text="Socials&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                classNames="sub-title"
              />
              <Link to="/" className="text-decoration-none">
                <Text text="Blog" classNames="tiny" />
              </Link>
              <Link to="/" className="text-decoration-none">
                <Text text="Twitter" classNames="tiny" />
              </Link>
              <Link to="/" className="text-decoration-none">
                <Text text="LinkedIn" classNames="tiny" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 order-md-1 ">
          <div className="d-flex flex-column footer-brand mb-3 justify-content-center">
            <div className="mb-3 text-center">
              <SVG name="saf-logo" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <Text
              text="&#169; 2020 Seamless Africa Fintech.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
              classNames="tiny text-center"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
