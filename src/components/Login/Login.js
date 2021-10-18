import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {singInUsingGoogle} = useAuth();
    return (
        <div>
            <div className="login-container mt-5 pt-5">
                <div className="login">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="login-form">
                                <h1>Email Login</h1>
                                <form action="">
                                    <input placeholder= 'your email' className='input-field mt-3' type="email" name="" id="" />
                                    <br /> 
                                    <input placeholder= 'your password' className='input-field mt-3' type="password" name="" id="" />
                                    <br />
                                    <button className='btn btn-primary mt-3 ps-5 pe-5'>Login</button>
                                    {/* <input className='submit-button mt-3' type="submit" value="Login" /> */}
                                </form>
                                <h5 className='mt-3'>Alternatively</h5>
                                <button onClick = {singInUsingGoogle} className='btn btn-warning mt-3'>Google Sign In</button>
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