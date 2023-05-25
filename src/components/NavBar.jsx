import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaArrowAltCircleRight } from 'react-icons/fa';
import img from '../assets/img/header-img.svg'

const NavBar = () => {
    return (
        <section id="section1" className="container-fluid">
 <div classNameName="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            LOGO
          </a>
          <button
            className="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-start" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-white" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white">Projects</a>
              </li>
            </ul>
              <div className="row">
                <div className="col-md-4 colR">
                  <a className="nav-link text-white rs"><FaLinkedinIn /></a>
                </div>
                <div className="col-md-4 colR">
                  <a className="nav-link text-white rs"><FaFacebookF /></a>
                </div>
                <div className="col-md-4 colR">
                  <a className="nav-link text-white rs me-5"><FaInstagram /></a>
                </div>
              </div>
              <button className="btn text-white bouton  colonne mt-lg-0 mt-sm-3" type="submit">
                Let's Connect
              </button>
          </div>
        </div>
      </nav>
    </div>
    <div className="row p-5 mt-5 text-start">
      <div className="col-md-6 mt-5">
        <h5 className="text-white bg-info border border-white p-2 w-50 text-center">Welcome to my portfolio</h5>
        <h1 className="text-white fw-bold mt-4">Hi, I'm Mama Web Developper</h1>
        <p className="text-white-50 fs-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut recusandae non maxime perspiciatis totam 
          debitis veniam natus deserunt, incidunt, repellat aliquid nostrum rerum, beatae quidem illo ratione minus
          delectus nobis.
        </p>
        <a href="#" className="text-decoration-none text-white fw-bold" type="button">Let's Connect <FaArrowAltCircleRight /></a>
      </div>
      <div className="col-md-6">
        <img src={img} className="img-fluid" alt="" />
      </div>
    </div>
    </section>
    );
};

export default NavBar;