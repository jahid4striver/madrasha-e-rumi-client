import React from 'react';
import HeroSection from './HeroSection';
import LatestBoyans from './LatestBoyans';
import LatestQA from './LatestQA';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <LatestBoyans></LatestBoyans>
            <LatestQA></LatestQA>
        </div>
    );
};

export default Home;