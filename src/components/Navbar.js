import React, { Fragment, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { BsList } from "react-icons/bs";
import { Transition } from '@headlessui/react'



const Navbar = () => {
    const navigate = useNavigate();
    const [dark, setDark] = useState(false);
    const [isMobile, setMobile] = useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    return (
        <div>
            <nav className="flex justify-between bg-white border-b-[1px] border-black dark:bg-black dark:border-white z-10 relative">
                <div id='right-nav' className='flex justify-center align-center'>
                    <span onClick={() => { navigate("/") }} className='font-bold bg-black text-white text-xl p-5 cursor-pointer dark:bg-white dark:text-black'>ZY</span>
                    <div className='flex justify-start align-center gap-5'>
                        <div className="hidden md:flex z-10">
                            {
                                [
                                    ['1', 'ABOUT', "/about"],
                                    ['2', 'PROJECTS', "/projects"],
                                ].map(([id, title, url]) => (
                                    <span key={id} onClick={() => { navigate(url) }} className="p-5 hover:underline text-xl cursor-pointer dark:bg-black dark:text-white">{title}</span>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div id='left-nav' className='flex justify-center item-center'>
                    <div id='dark-mode'>
                        <span onClick={() => darkModeHandler()} className='p-5 md:mr-5 dark:text-white'>
                            {

                                dark && <IoSunny /> // render sunny when dark is true
                            }
                            {
                                !dark && <IoMoon /> // render moon when dark is false
                            }
                        </span>
                    </div>
                    <div className="md:hidden">
                        <button className="p-6 text-black dark:text-white" onClick={() => { setMobile(!isMobile) }} >
                            <BsList />
                        </button>

                    </div>
                </div>
            </nav >
            <Transition
                show={isMobile}
                as={Fragment}
                enter="transition ease-out duration-1000 transform"
                enterFrom="opacity-0 translate-y-[-200%]"
                enterTo="opacity-100 translate-y-0"
                className="-z-10"
            >
                <div className={`flex-col items-center border-b-[1px] border-black bg-white dark:bg-black dark:border-white md:hidden -z-10 ${!isMobile ? "hidden" : "flex"}`} id="navbar-hamburger">
                    {
                        [
                            ['1', 'ABOUT', '/about'],
                            ['2', 'PROJECTS', '/projects'],
                        ].map(([id, title, url]) => (
                            <span key={id} onClick={() => { navigate(url) }} className="p-5 hover:underline text-xl cursor-pointer dark:bg-black dark:text-white">{title}</span>
                        ))
                    }
                </div>
            </Transition>
        </div >

    )
}

export default Navbar;
