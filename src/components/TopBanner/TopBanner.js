import React from 'react';
import aws from "../../assets/AWS.png"

const TopBanner = () => {
    return (
        <div className='relative flex justify-center gap-16 items-center pt-10 pb-32 bg-[#171a53] rounded-bl-[150px]'>
            <div className='flex flex-col '>
                <h1 className='text-white text-6xl max-w-lg font-medium'>A breakthrough in your career awaits.</h1>
                <p className='text-white text-base mt-7 max-w-lg'>We create opportunities for learners worldwide by offering scholarships and utilizing our proven playbook that builds core competencies in in-demand technologies.</p>
            </div>
            <div>
                <img src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/3GHH1tQ4hMFPxPqm8nEmJk/52e8241b64a259c569c49f0014bf6517/hero-graphic-scholarships_1_.png?fm=webp&q=100" alt="" className='h-[500px] w-[500px]' />
            </div>
            <div>
                <div>
                    <h1>AWS AI & ML Scholarship Program</h1>
                </div>
                <div>
                    <img src={aws} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TopBanner;