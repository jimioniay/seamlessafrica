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
              <Title text="Products&nbsp;&nbsp;&nbsp;" classNames="sub-title" />
              <Link to="/" className="text-decoration-none">
                <Text text="My Angu" classNames="small-text text" />
              </Link>
            </div>
            <div className="d-flex flex-column justify-content-center mb-3">
              <Title text="Company&nbsp;" classNames="sub-title" />
              <Link to="/" className="text-decoration-none">
                <Text text="About" classNames="small-text" />
              </Link>
              <Link to="/" className="text-decoration-none">
                <Text text="Partners" classNames="small-text" />
              </Link>
              <Link to="/" className="text-decoration-none">
                <Text text="Careers" classNames="small-text" />
              </Link>
              <Link to="/" className="text-decoration-none">
                <Text text="Legal & Policy" classNames="small-text" />
              </Link>
              <Link to="/" className="text-decoration-none">
                <Text text="Support" classNames="small-text" />
              </Link>
            </div>
            <div className="d-flex flex-column justify-content-center mb-3">
              <Title
                text="Socials&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                classNames="sub-title"
              />
              <Link to="/" className="text-decoration-none">
                <Text text="Blog" classNames="small-text" />
              </Link>
              <Link to="/" className="text-decoration-none">
                <Text text="Twitter" classNames="small-text" />
              </Link>
              <Link to="/" className="text-decoration-none">
                <Text text="LinkedIn" classNames="small-text" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-3 order-md-1 ">
          <div className="d-flex flex-column footer-brand mb-3 justify-content-center">
            <div className="mb-3 text-center ">
              &nbsp;&nbsp;&nbsp;
              <SVG name="saf-logo" />
            </div>
            <Text
              text="&#169; 2020 Seamless Africa Fintech."
              classNames="small-text text-center "
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
);
export default Footer;
