import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Home;