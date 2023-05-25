import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.min.js';
import Carousel from '../components/Carousel'

const Section2 = () => {
    return (
        <section className='position-relative container-fluid d-flex justify-content-center align-items-center text-white' id='section2'>
            <div className='position-absolute  start-50 translate-middle skills rounded-5 bg-dark p-5 d-flex justify-content-center align-items-center'>
                <h1 className=' fw-bold'>Skills</h1>
                <Carousel />
            </div>
        </section>
    );     
};

export default Section2;