import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { Outlet } from 'react-router-dom';
import Policy from '../../Components/Policy/Policy';

const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section className='my-5'>
                <Policy></Policy>
            </section>
            <section>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Home;