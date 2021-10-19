import React from 'react';

const Footer = () => {
    return (
        <div className='bg-secondary mt-5 pt-5 sticky-bottom'>
            <div className="container">
                <div className="row g-4">
                    <div className="col col-md-4">
                        <div className="card border border-0">
                            <div className=" card-body contact-address">
                                <h5 className='card-title'>Contact Us</h5>
                                <p className='card-text'>2 Arboretum Place, Barking <br />
                                Essex IG11 7RL
                                </p>
                                <p><b>Tel: </b> 020 8594 4129</p>
                                <p><b>Email : </b> info@dentalcare.com</p>
                                <div>
                                    <h5 className='mt-3'>Follow us on:</h5>
                                    <span className='me-2'><img src="https://img.icons8.com/fluency/48/000000/facebook-new.png"/></span>
                                    <span className='me-2'><img src="https://img.icons8.com/color/48/000000/twitter--v1.png"/></span>
                                    <span><img src="https://img.icons8.com/color/48/000000/google-plus--v1.png"/></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-4">
                        <div className="card border border-0">
                            <div className=" card-body opening-hour">
                                <h5 className='card-title'>Opening Hours</h5>
                                <p className='card-text'>Monday <span className='ms-5'>08:30am - 06:30pm</span></p>
                                <p>Tuesday <span className='ms-5'>08:30am - 06:30pm</span></p>
                                <p>Wednesday <span className='ms-5'>08:30am - 06:30pm</span></p>
                                <p>Thursday <span className='ms-5'>08:30am - 06:30pm</span></p>
                                <p>Friday <span className='ms-5'>08:30am - 06:30pm</span></p>
                                <p>Saturday <span className='ms-5'>08:30am - 02:00pm</span></p>
                                <p><small>If you need urgent care outside of our opening <br />
                                    hours please call <span className='text-primary'>NHS 111</span> for help and advice.</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-4 ">
                        <div className="card border border-0">
                            <div className=" card-body general-info">
                                <h3 className='card-title text-primary'>Dental Care</h3>
                                <p className='card-text'><b>Regular dental checkups help in detection <br />
                                    of early warning signs of certain health <br />
                                    related issues. Visit your dentists regularly <br />
                                    and stay healthy.</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer mt-3">
                <small className="text-white">All rights resevred</small>
            </div>
        </div>
    );
};

export default Footer;


