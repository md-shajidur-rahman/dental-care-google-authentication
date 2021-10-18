import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div>
            <div className="login-container">
                <div className="login">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="login-form">
                                <form action="">
                                    <input placeholder= 'your name' className='input-field mt-3' type="text" name="" id="" />
                                    <br /> 
                                    <input placeholder= 'your email' className='input-field mt-3' type="email" name="" id="" />
                                    <br /> 
                                    <input placeholder= 'your password' className='input-field mt-3' type="password" name="" id="" />
                                    <br />
                                    <input className='submit-button mt-3' type="submit" value="Submit" />
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="login-img">
                                <img src="https://i.ibb.co/jfhSKJp/login-img.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;