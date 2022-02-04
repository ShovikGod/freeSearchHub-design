import React from 'react';
import Hero from '../components/Hero/Hero';
import Search from '../components/Search/Search';
import Testimonials from '../components/Testimonials/Testimonials';

function Home() {
    return (
        <>
            <Hero />
            <Search type="small" />
            <Testimonials />
        </>
    );
}

export default Home;
