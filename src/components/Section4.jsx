import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.min.js';
import imgc from '../assets/img/contact-img.svg';

const Section4 = () => {
    return (
        <div className='container-fluid bg-info p-5' id='section4'>
            <div className="row">
                <div className="col-md-6">
                    <img src={imgc}  alt="alt" className='w-100 h-100' />
                </div>
                <div className="col-md-6 p-5">
                <form>
                    <div className="row">
                        <div className="col-md-6 mb-3 text-start">
                            <label for="exampleInputFirstName" class="form-label text-white">Fisrt name</label>
                            <input type="text" class="form-control bg-light bg-opacity-25" id="exampleInputFirstName" />
                        </div>
                        <div className="col-md-6 mb-3 text-start">
                            <label for="exampleInputLastName" class="form-label text-white">Last name</label>
                            <input type="text" class="form-control bg-light bg-opacity-25" id="exampleInputLastName" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3 text-start">
                            <label for="exampleInputEmail" class="form-label text-white">Email</label>
                            <input type="email" class="form-control bg-light bg-opacity-25" id="exampleInputEmail" />
                        </div>
                        <div className="col-md-6 mb-3 text-start">
                            <label for="exampleInputTel" class="form-label text-white">Telephone</label>
                            <input type="tel" class="form-control bg-light bg-opacity-25" id="exampleInputTel" />
                        </div>
                        <div class=" mb-3 text-start text-white">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea class="form-control  bg-light bg-opacity-25" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                    </div>
                  
                    <button type="submit" class="btn btn-light fw-bold fs-5 mt-3">Send</button>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Section4;