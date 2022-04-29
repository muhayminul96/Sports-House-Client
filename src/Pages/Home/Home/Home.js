import React from 'react';
import Loading from '../../shared/Loadig/Loading';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Loading></Loading>
        </div>
    );
};

export default Home;