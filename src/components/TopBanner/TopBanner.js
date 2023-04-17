import React from 'react';
import aws from "../../assets/AWS.png"
import oneten from "../../assets/Oneten.png"
import { BsArrowRight } from 'react-icons/bs'

const TopBanner = () => {
    return (
        <div data-theme="light" className='mb-[1200px]'>
            <div className='relative flex flex-col md:flex-row justify-center gap-16 items-center pt-24 md:pt-28 lg:pt-28 pb-32 bg-[#171a53] rounded-bl-[110px] lg:h-[720px] md:h-[612px] h-[1000px]'>
                <div className='flex flex-col px-10'>
                    <h1 className='text-white text-3xl md:text-4xl lg:text-6xl max-w-lg font-medium'>A breakthrough in your career awaits.</h1>
                    <p className='text-white text-base mt-7 max-w-lg'>We create opportunities for learners worldwide by offering scholarships and utilizing our proven playbook that builds core competencies in in-demand technologies.</p>
                </div>
                <div>
                    <img src="https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/3GHH1tQ4hMFPxPqm8nEmJk/52e8241b64a259c569c49f0014bf6517/hero-graphic-scholarships_1_.png?fm=webp&q=100" alt="" className='lg:h-[500px] md:h-[400px] h-[300px] lg:w-[500px]  md:w-[400px] w-[300px]' />
                </div>
            </div>
            <div className='absolute top-[900px] md:top-[97%] lg:top-[97%] inset-x-0 md:mx-10 sm:mx-0 mx-3 lg:mx-10 flex items-center justify-center gap-10 flex-col md:flex-col'>
                <div className='mt-2 md:mx-16 sm:mx-0 mx-3 lg:mx-40 flex items-center justify-center gap-16 flex-col md:flex-row  pt-10 pb-10 bg-[#f6f6f6] rounded-md rounded-tr-[110px] md:px-14 px-2 '>
                    <div>
                        <h1 className='md:text-3xl text-xl font-semibold'>AWS AI & ML Scholarship Program</h1>
                        <p className='mt-6 font-medium text-lg'>Who can apply?</p>
                        <p>Underserved and underepresented students</p>
                        <p className='mt-6 font-medium text-lg'>Program options:</p>
                        <p>AI Programming with Python</p>
                        <div className=' '>
                            <p className='bg-[#2015ff] font-medium text-white border-2 border-[#2015ff] rounded-md px-5 py-4 w-[200px] mt-10'>Get Started <span><BsArrowRight className='inline-block text-2xl ml-7' /></span> </p>
                        </div>
                    </div>
                    <div>
                        <img src={aws} alt="" />
                    </div>
                </div>
                <div className='mt-2 md:mx-16 sm:mx-0 mx-3 lg:mx-40 flex items-center justify-center gap-16 flex-col md:flex-row py-24 bg-[#f6f6f6] rounded-md rounded-tl-[110px] md:px-14 px-2 '>
                    <div>
                        <h1 className='md:text-3xl text-xl font-semibold'>OneTen/Blacks in Technology Scholarship Program</h1>
                        <p className='mt-6 font-medium text-lg'>Who can apply?</p>
                        <p>Black job-seekers without 4-year degrees across the United States</p>
                        <p className='mt-6 font-medium text-lg'>Program options:</p>
                        <p>Business Analytics, Digital Marketing, or Front End Web Development Fundamentals</p>
                        <div className=' '>
                            <p className='bg-[#2015ff] font-medium text-white border-2 border-[#2015ff] rounded-md px-5 py-4 w-[200px] mt-10'>Apply Now <span><BsArrowRight className='inline-block text-2xl ml-7' /></span> </p>
                        </div>
                    </div>
                    <div>
                        <img src={oneten} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;




