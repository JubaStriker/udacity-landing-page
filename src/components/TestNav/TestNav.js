import React, { useEffect } from 'react';
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    XMarkIcon, Bars3Icon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { GiArtificialIntelligence } from 'react-icons/gi'
import { FaTasks } from 'react-icons/fa'
import { RiCodeBoxFill } from 'react-icons/ri'
import { FcAutomotive, FcBusiness, FcDataConfiguration } from 'react-icons/fc'
import { GrCloudSoftware, GrShieldSecurity } from 'react-icons/gr'

const TestNav = () => {


    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset;

        if (scrollTop > 600) {
            setHasScrolled(true);
        }

        // else if (scrollTop > 600) {
        //     setHasScrolled(true);
        // }
        else {
            setHasScrolled(false);
        }
    };
    const products = [
        { name: 'Artificial Intelligence', description: '', href: '#', icon: <GiArtificialIntelligence className='text-3xl text-red-700' /> },
        { name: 'Autonomous System', description: '', href: '#', icon: <FcAutomotive className='text-3xl' /> },
        { name: 'Business', description: '', href: '#', icon: <FcBusiness className='text-3xl' /> },
        { name: 'Cloud Computing', description: '', href: '#', icon: <GrCloudSoftware className='text-3xl text-sky-600' /> },
        { name: 'Cybersecurity', description: '', href: '#', icon: <GrShieldSecurity className='text-3xl text-blue-500' /> },
        { name: 'Data Science', description: '', href: '#', icon: <FcDataConfiguration className='text-3xl' /> },
        { name: 'Product Management', description: '', href: '#', icon: <FaTasks className='text-2xl text-blue-500' /> },
        { name: 'Programming & Development', description: '', href: '#', icon: <RiCodeBoxFill className='text-2xl text-blue-500' /> }
    ]
    const callsToAction = [
        { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
        { name: 'Contact sales', href: '#', icon: PhoneIcon },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    return (
        <div className='relative'>
            <header className={`${hasScrolled ? "bg-white z-20 fixed top-0 w-full transition-transform translate-y-0 duration-200 shadow-lg" : ""}`}>
                <nav className={`mx-auto h-24 flex max-w-7xl items-center justify-between p-8 lg:px-8 `} aria-label="Global">
                    <div className="flex lg:flex-1">
                        <img src="https://www.udacity.com/images/svgs/udacity-tt-logo.svg" alt="" />
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <Popover.Group className="hidden lg:flex lg:gap-x-12">


                        <div className='flex gap-8 items-center'>
                            <div className='text-lg font-medium hover:text-[#2015ff] hover:cursor-pointer'>Why udacity?</div>
                            <div className='text-lg font-medium hover:text-[#2015ff] hover:cursor-pointer'>Student Success</div>

                            <Popover className="relative">
                                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                                    <div className='text-lg font-medium hover:text-[#2015ff] hover:cursor-pointer'>Schools</div>
                                    <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                </Popover.Button>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-200"
                                    enterFrom="opacity-0 translate-y-1"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in duration-150"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 translate-y-1"
                                >
                                    <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                        <div className="p-4">
                                            {products.map((item) => (
                                                <div
                                                    key={item.name}
                                                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50
                                                    hover:text-blue-700"
                                                >
                                                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                        {/* <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" /> */}
                                                        {item.icon}
                                                    </div>
                                                    <div className="flex-auto">
                                                        <a href={item.href} className="block font-semibold text-gray-900 hover:text-blue-700">
                                                            {item.name}
                                                            <span className="absolute inset-0" />
                                                        </a>
                                                        <p className="mt-1 text-gray-600">{item.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    </Popover.Panel>
                                </Transition>
                            </Popover>
                            <div className='text-lg font-medium hover:text-[#2015ff] hover:cursor-pointer'>Sign In</div>
                            <div className='border-2 px-5 py-1 border-[#2015ff] text-lg font-semibold hover:text-white hover:bg-[#2015ff] text-[#2015ff] rounded-md duration-200 hover:cursor-pointer'>Get Started</div>
                        </div>
                    </Popover.Group>
                    {/* <div className='border-2 px-5 py-1 border-[#2015ff] text-lg font-semibold hover:text-white hover:bg-[#2015ff] text-[#2015ff] rounded-md duration-200 hover:cursor-pointer'>Get Started</div> */}
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <div className="flex lg:flex-1">
                                <img src="https://www.udacity.com/images/svgs/udacity-tt-logo.svg" alt="" />
                            </div>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <div className='text-base font-medium hover:text-[#2015ff] hover:cursor-pointer py-5 mt-9'>Why udacity?</div>
                                    <hr />
                                    <div className='text-base font-medium hover:text-[#2015ff] hover:cursor-pointer py-5'>Student Success</div>
                                    <hr />
                                    <Disclosure as="div" className="-mx-3">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
                                                    Schools
                                                    <ChevronDownIcon
                                                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                        aria-hidden="true"
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="mt-2 space-y-2">
                                                    {[...products, ...callsToAction].map((item) => (
                                                        <Disclosure.Button
                                                            key={item.name}
                                                            as="a"
                                                            href={item.href}
                                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                        >
                                                            {item.name}
                                                        </Disclosure.Button>
                                                    ))}
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>

                                </div>
                                <div className="py-6 flex gap-9 items-center justify-center">
                                    <div className='text-lg font-medium hover:text-[#2015ff] hover:cursor-pointer'>Sign In</div>
                                    <div className='border-2 px-5 py-1 border-[#2015ff] text-lg font-semibold hover:text-white hover:bg-[#2015ff] text-[#2015ff] rounded-md duration-200 hover:cursor-pointer'>Get Started</div>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>


    );
};

export default TestNav;