import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Section5 = () => {
  return (
    <section className="position-relative container-fluid" id="section5">
      <div className="position-absolute  start-50 translate-middle news rounded-5 bg-white p-5">
        <h2 className=" fw-bold text-start para">
          Subscribe to our Newsletter & Never miss latest updates
        </h2>
        <div class="input-group mt-4 border border-info rounded-4 p-2">
          <input
            type="text"
            class="form-control border-0"
            placeholder="Enter email"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-info text-white btn-lg rounded-4"
            type="button">
            Subscribe
          </button>
        </div>
      </div>
    </section>    
  );
};

export default Section5;
