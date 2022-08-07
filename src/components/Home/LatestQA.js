import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LatestQA = () => {
    const [boyans, setboyans] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getboyans')
            .then(res => res.json())
            .then(data => {
                setboyans(data);
                console.log(data);
            })
    }, [])
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='my-16 text-3xl border-b-4 border-accent font-bold mt-8 inline-block'>সাম্প্রতিক প্রশ্ন-উত্তর সমূহ</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    boyans.slice(0,6).map(boyan => <div className='shadow-2xl p-5 rounded-lg text-left'>
                        <h3 className='text-lg font-bold'>বয়ানের বিষয়ঃ {boyan.name}</h3>
                        <h3 className='text-base'><span className='font-bold'>স্থানঃ </span>{boyan.place}</h3>
                        <h3 className='text-base'><span className='font-bold'>তারিখঃ</span> {boyan.date}  <span className='font-bold'>  বিভাগঃ</span> {boyan.category}</h3>
                        <p className='my-4'>{boyan.description}</p>
                        <audio className='mx-auto mt-2 bg-accent' controls src={boyan.link}></audio>
                        <div className='mt-4 text-center'>
                        <a className='bg-accent font-bold rounded-md p-3 text-white' href={boyan.link}>ডাউনলোড</a> 
                        </div>
                    </div>)
                }
            </div>
            <div className='text-right my-4'>
            <Link to='/allboyans' className='btn btn-md btn-accent font-bold text-white text-right'>সকল প্রশ্ন-উত্তর শুনুন</Link>
            </div>
        </div >
    );
};

export default LatestQA;