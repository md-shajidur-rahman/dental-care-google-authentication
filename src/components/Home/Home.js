import React from 'react';
import Banner from '../Banner/Banner';
import Login from '../Login/Login';
import Services from '../Services/Services';
import Menubar from '../Shared/Menubar/Menubar';

const Home = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Banner></Banner>
            <Services></Services>
            <Login></Login>
        </div>
    );
};

export default Home;