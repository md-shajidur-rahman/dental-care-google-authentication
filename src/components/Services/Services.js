import React, { useEffect, useState } from 'react';
import './Services.css'
const Services = () => {
    const [treatments, setTreatments] = useState([]);

    useEffect ( () => {
        fetch('/treatmentServices.json')
        .then (res => res.json())
        .then (data => setTreatments(data))
    }, [])
    return (
        <div>
            <div className="services container mt-5">
                <div className="top-part">
                    <h3>Our Services <span className='text-primary'> and Specialities</span></h3>
                    <p>Begin and end your day with a smile!</p>
                </div>

                <div className="services-cart">
                    <div className="row">
                        
                        {
                            treatments.map ( (treatment) => (
                                <div key={treatment.id} className="col-md-6 col-lg-4">
                                    <div className="cart p-3 m-2 rounded">
                                        <div className="cart-image">
                                            <img src={treatment.img} alt="" />
                                        </div>
                                        <div className='mt-3'>
                                            <h5 className='text-primary'>{treatment.name}</h5>
                                            <p>{treatment.description}</p>
                                        </div>
                                        <button className='btn btn-primary btn-position'>READ MORE</button>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;