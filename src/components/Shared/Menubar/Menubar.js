import React from 'react';
import './Menubar.css';

const Menubar = () => {
    return (
        <div>
            <div className="menubar-container">
                <div className="menubar">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="business-name p-2">
                                <h1 className='text-primary'>Dental Care</h1>
                                <h5>Beautifli Smiles Are Created Here</h5>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="menu-items">
                                <ul className= 'd-flex justify-content-end align-item-center me-5 p-2'>
                                    <li className="item p-2">Home</li>
                                    <li className="item p-2">Services</li>
                                    <li className="item p-2">Blog</li>
                                    <li className="item p-2">Dentists</li>
                                    <li className="item p-2">Login</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;