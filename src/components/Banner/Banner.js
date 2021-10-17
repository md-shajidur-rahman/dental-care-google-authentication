import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="banner d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <h1 className='banner-tile'>From Simple <span className='text-white'>Procedures</span><br />
                            to Complex <span className='text-white'>Surgeries</span>
                            </h1>
                            <p className='text-white'>With best facilities and better equipment, you are in safe hands</p>
                            <div className="btn btn-primary">Make an Appointment</div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;