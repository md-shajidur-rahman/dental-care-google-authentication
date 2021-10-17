import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Menubar from '../Shared/Menubar/Menubar';

const Home = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;