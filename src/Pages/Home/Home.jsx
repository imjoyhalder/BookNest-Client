import React from 'react';
import Banner from '../../Components/Banner/Banner';
import { Outlet } from 'react-router-dom';
import Policy from '../../Components/Policy/Policy';
import Books from '../../Components/Books/Books';

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
                <Books></Books>
            </section>
            <section>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Home;