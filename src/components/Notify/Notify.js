import React from 'react';
import { BsArrowRight } from 'react-icons/bs'

const Notify = () => {
    return (
        <div className='h-[600px] flex mt-60 flex-col items-center justify-center bg-cover' style={{ backgroundImage: `url(https://www.udacity.com/images/brand-refresh/cta-background2.png)` }} >
            <div>
                <h1 className='text-3xl md:text-6xl md:max-w-[800px] mx-auto text-white text-center font-semibold'>Be the first to know about future scholarships.</h1>
            </div>
            <div className='mt-20 flex justify-between items-center'>
                <p className='bg-[#bdea09] font-medium border-2 border-[#bdea09] rounded-md px-5 py-4 w-[300px] mt-10 justify-between flex'>
                    <span className='block text-lg font-medium text-black'>Notify Me</span>
                    <span className='block text-black'><BsArrowRight className='inline text-2xl font-semibold' /></span>
                </p>

            </div>
        </div>
    );
};

export default Notify;


