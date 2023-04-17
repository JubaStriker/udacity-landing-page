import React from 'react';
import { FaFacebook } from 'react-icons/fa'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'


const Footer = () => {
    return (
        <div>
            <h1 className='text-center text-xs text-gray-700 font-light mt-14 mb-16'>* Udacity Career Outcomes Survey, July 2020</h1>


            <div className="flex lg:flex-1 max-w-7xl mx-auto mb-8">
                <img src="https://www.udacity.com/images/svgs/udacity-tt-logo.svg" alt="" className='ml-6' />
            </div>


            <div className='max-w-7xl mx-auto grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-6 pl-6 mt-6'>
                <div>
                    <h1 className='text-xl font-bold mb-3'>Featured Programs</h1>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Business Analytics</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>SQL</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Data Engineering with AWS</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Data Analyst</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Intro to Programming</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Digital Marketing</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Self Driving Car Engineer</p>
                </div>
                <div>
                    <h1 className='text-xl font-bold mb-3'>Only At Udacity</h1>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Artificial Intelligence</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Deep Learning</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Digital Marketing</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Flying Car and Autonomous Flight Engineer</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Intro to Self-Driving Cars</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Machine Learning Engineer</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Robotics Software Engineer</p>


                    <h1 className='text-xl font-bold mt-20'>Udacity Schools</h1>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>School of Artificial Intelligence</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>School of Autonomous Systems</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>School of Business</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>School of Cloud Computing</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>School of Cybersecurity</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>School of Data Science</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>School of Programming</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>School of Product Management</p>
                </div>

                <div>
                    <h1 className='text-xl font-bold'>Enterprise</h1>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Udacity for Enterprise</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Digital Transformation with Udacity</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Artificial Intelligence for Enterprise</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Cybersecurity for Enterprise</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Data Science for Enterprise</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Udacity for Financial Services</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Corporate Social Responsibility</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Train-to-Hire</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Enterprise Resource Center</p>

                    <h1 className='text-xl font-bold mt-16'>Government</h1>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Udacity for Government</p>

                    <h1 className='text-xl font-bold mt-16'>Individuals</h1>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Udacity for Individuals</p>
                </div>

                <div className='ml-3'>
                    <h1 className='text-xl font-bold mb-3'>Resources</h1>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Catalog</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Career Services</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Student Success</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Udacity Talks</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Scholarships</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>What is AI?</p>


                    <h1 className='text-xl font-bold mt-16'>Company</h1>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>About</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Blog</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>In the News</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Jobs at Udacity</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Partners</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Affiliates</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Become an Instructor</p>
                </div>

                <div>
                    <h1 className='text-xl font-bold mb-3'>Support</h1>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Contact Us</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Help and FAQ</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Service Status</p>
                    <p className='my-2 text-sm hover:text-violet-800 cursor-pointer'>Tech Requirements</p>

                    <p className='flex gap-2 items-center mt-3'>
                        <FaFacebook className='text-3xl hover:text-violet-800 cursor-pointer' />
                        <AiFillTwitterCircle className='text-3xl hover:text-violet-800 cursor-pointer' />
                        <AiFillLinkedin className='text-3xl hover:text-violet-800 cursor-pointer ' />
                        <AiFillInstagram className='text-3xl hover:text-violet-800 cursor-pointer' />

                    </p>
                </div>
            </div>

            <hr className='border-b-[1px] border-gray-400 max-w-7xl mx-auto mt-10' />

            <div className='mt-11 max-w-7xl mx-auto mb-10 pb-4 flex flex-col-reverse lg:flex-row lg:gap-1 gap-5 items-start px-2 justify-between'>
                <div>
                    <h1 className='max-w-lg text-xs mb-2'><span className='font-semibold'>Udacity is the trusted market leader in talent transformation.</span> We change lives, businesses, and nations through digital upskilling, developing the edge you need to conquer what’s next</h1>
                    <h1 className='max-w-lg text-xs mt-3' >Udacity* Nanodegree programs represent collaborations with our industry partners who help us develop our content and who hire many of our program graduates.</h1>

                    <h1 className='max-w-lg text-xs mt-3'>"Nanodegree" is a registered trademark of Udacity. © 2011–2023 Udacity, Inc.</h1>

                    <h1 className='max-w-lg text-xs mt-3'>*not an accredited university and doesn’t confer traditional degrees</h1>
                </div>
                <div>
                    <h1>Site Map</h1>
                </div>
                <div>

                    <h1>Legal & Privacy</h1>
                </div>
                <div>
                    <h1>© 2011–2023 Udacity, Inc.</h1>
                </div>
            </div>
        </div>
    );
};

export default Footer;