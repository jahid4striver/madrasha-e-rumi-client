import React from 'react';
import madrasha from '../../assets/images/madrasha.jpeg'

const HeroSection = () => {
    return (
        <div class="hero min-h-screen" style={{backgroundImage: `url(${madrasha})`}}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">ভর্তি চলছে ভর্তি চলছে</h1>
                    <p class="mb-5">সবুজের সমারোহে গড়ে ওঠা আপনাদের পরিচিত  সুনামধন্য দ্বীনি শিক্ষা প্রতিষ্ঠান <span className='font-bold'>মাদরাসা-এ জালালুদ্দীন রুমী</span> এর সকল বিভাগে ভর্তি চলছে। </p>
                    <button class="btn btn-accent font-bold text-white">বিস্তারিত জানুন</button>
                </div>
            </div>
        </div>

    );
};

export default HeroSection;