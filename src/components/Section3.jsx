import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import img1 from "../assets/img/project-img1.png";
import img2 from "../assets/img/project-img2.png";
import img3 from "../assets/img/project-img3.png";
const Section3 = () => {
  return (
    <section
      className="container-fluid p-5 d-flex justify-content-center align-items-center text-white bg-black"
      id="section3">
      <h1 className="fw-bold">Projects</h1>
      <p className="text-white-50 fs-5 mt-3 para">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut recusandae
        non maxime perspiciatis totam debitis veniam natus deserunt
      </p>
      <div class="container mt-5 d-flex justify-content-between align-items-center flex-column" />
      {/* Nav tabs */}
      <ul
        class="nav nav-tabs d-flex m-auto border-0 "
        role="tablist"
        data-aos="fade-up"
        data-aos-delay="100">
        <li class="nav-item">
          <a
            class="nav-link tab active rounded-pill text-white text-center fw-bold border-0"
            href="#day1"
            role="tab"
            data-bs-toggle="tab">
            All
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link tab rounded-pill text-white text-center fw-bold border-0"
            href="#day2"
            role="tab"
            data-bs-toggle="tab">
            Bootstrap
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link tab rounded-pill text-white text-center fw-bold border-0"
            href="#day3"
            role="tab"
            data-bs-toggle="tab">
            Javascript
          </a>
        </li>
      </ul>
      <p class="mt-3 fs-4 text-black-50 text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique
        saepe ipsum ducimus placeat obcaecati ut dignissimos enim totam
      </p>

      {/* Tab panes */}
      <div class="tab-content ">
        <div class="tab-pane container active" id="day1">
        <div class="row">
            <div class="col-sm-6 col-md-4 colonne">
              <div class="profile-card rounded-5">
                <div class="profile-img">
                  <img src={img1} alt="alt" />
                </div>
                <div class="profile-content">
                  <h2 class="title">
                    Projet 1
                    <span className="fs-5">Designer & Developer</span>
                  </h2>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 colonne">
              <div class="profile-card rounded-5">
                <div class="profile-img">
                  <img src={img2} alt="alt" />
                </div>
                <div class="profile-content">
                  <h2 class="title">
                    Projet 2
                    <span className="fs-5">Designer & Developer</span>
                  </h2>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 colonne">
              <div class="profile-card rounded-5">
                <div class="profile-img">
                  <img src={img3} alt="alt" />
                </div>
                <div class="profile-content">
                  <h2 class="title">
                    Projet3
                    <span className="fs-5">Designer & Developer</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane container fade" id="day2">
        <div class="row">
            <div class="col-sm-6 col-md-4 colonne">
              <div class="profile-card rounded-5">
                <div class="profile-img">
                  <img src={img1} alt="alt" />
                </div>
                <div class="profile-content">
                  <h2 class="title">
                    Projet 1
                    <span className="fs-5">Designer & Developer</span>
                  </h2>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 colonne">
              <div class="profile-card rounded-5">
                <div class="profile-img">
                  <img src={img2} alt="alt" />
                </div>
                <div class="profile-content">
                  <h2 class="title">
                    Projet 2
                    <span className="fs-5">Designer & Developer</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane container fade" id="day3">
        <div class="row">
            <div class="col-sm-6 col-md-4 colonne">
              <div class="profile-card rounded-5">
                <div class="profile-img">
                  <img src={img1} alt="alt" />
                </div>
                <div class="profile-content">
                  <h2 class="title">
                    Projet 1
                    <span className="fs-5">Designer & Developer</span>
                  </h2>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-md-4 colonne">
              <div class="profile-card rounded-5">
                <div class="profile-img">
                  <img src={img3} alt="alt" />
                </div>
                <div class="profile-content">
                  <h2 class="title">
                    Projet3
                    <span className="fs-5">Designer & Developer</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
