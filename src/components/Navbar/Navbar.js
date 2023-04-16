import React from 'react';

const Navbar = () => {
    return (
        <div className='h-24 bg-white shadow-lg flex items-center '>

            <div className='flex justify-between items-center w-[80%] mx-auto'>
                <img src="https://www.udacity.com/images/svgs/udacity-tt-logo.svg" alt="" />
                <div className='flex gap-8 items-center'>
                    <div className='text-lg font-medium hover:text-[#2015ff] hover:cursor-pointer'>Why udacity?</div>
                    <div className='text-lg font-medium hover:text-[#2015ff] hover:cursor-pointer'>Student Success</div>
                    <div className='text-lg font-medium hover:text-[#2015ff] hover:cursor-pointer'>Schools</div>
                    <div className='text-lg font-medium hover:text-[#2015ff] hover:cursor-pointer'>Sign In</div>
                    <div className='border-2 px-5 py-1 border-[#2015ff] text-lg font-semibold hover:text-white hover:bg-[#2015ff] text-[#2015ff] rounded-md duration-200 hover:cursor-pointer'>Get Started</div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;