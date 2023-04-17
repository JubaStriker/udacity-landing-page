import React from 'react';
import RevCarousel from './RevCarousel';

const Reviews = () => {
    return (
        <div className='rounded-tl-[110px] bg-[#171a53] py-32 lg:mt-96 mt-[1800px] md:mt-[1600px]'>
            <div className='flex justify-center gap-10 items-center'>
                <div className='flex flex-col lg:flex-row gap-10 items-center'>
                    <div>
                        <h1 className='text-white text-3xl md:text-6xl lg:text-6xl max-w-lg font-medium'>Udacity’s proven career results.</h1>
                        <p className='text-white text-base mt-7 max-w-sm'>Our scholarships have helped tens of thousands of people globally. And that number keeps growing everyday.</p>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center gap-5 justify-center'>
                        <div className='rounded-tr-[80px] bg-white px-9 flex py-16 flex-col justify-center items-center gap-6 h-[400px]'>
                            <div className="radial-progress text-green-600 text-3xl" style={{ "--value": "73", "--size": "8rem", "--thickness": "8px" }}>73%</div>
                            <div>
                                <h1 className='max-w-[200px]'>of graduates get promoted or land a better job.∗</h1>
                            </div>
                        </div>
                        <div className='rounded-bl-[80px] bg-white px-9 flex py-16 flex-col justify-center items-center gap-6 h-[400px]'>
                            <div className="radial-progress text-blue-600 text-3xl" style={{ "--value": "50", "--size": "8rem", "--thickness": "8px" }}>50%</div>
                            <div>
                                <h1 className='max-w-[200px]'>of graduates that wanted to advance their careers received a raise with a median increase of +33%.∗</h1>
                            </div>
                        </div>

                    </div>
                </div>
                <div></div>
            </div>

            <RevCarousel />
        </div>
    );
};

export default Reviews;