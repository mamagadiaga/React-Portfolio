import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
        
      <footer className="p-5 bg-black">
      <div className="container">
        <div className="row">
          <div className="col-md-10 text-start text-white">
            <h1>LOGO</h1>
          </div>
          <div className="col-md-2">
            <div className="row">
              <div className="col-md-4 colR">
                <a className="nav-link text-white rs">
                  <FaLinkedinIn />
                </a>
              </div>
              <div className="col-md-4 colR">
                <a className="nav-link text-white rs">
                  <FaFacebookF />
                </a>
              </div>
              <div className="col-md-4 colR">
                <a className="nav-link text-white rs">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;