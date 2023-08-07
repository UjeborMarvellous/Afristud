import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';

const MenuItems = ({ showMenu, active }) => {
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 60) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    window.addEventListener("scroll", changeColor);

    return (
        <div>
            <div className={active ? 'md:block flex-col duration-300 ease-in flex items-center fixed inset-0 justify-center h-screen gap-8 bg-white/50 left-1/4 backdrop-blur-lg' : 'hidden'}>
                <IoMdClose onClick={showMenu} className='text-4xl top-0 cursor-pointer scale-125 mr-3 -pt-20 -mt-[90%] ml-auto text-blue-800 font-semibold' />
                <Link to="/" className={color ? 'hover:text-xl duration-200 ease-in-out font-mono lg:text-xl md:text-lg sm:text-xl font-semibold text-black lg:mx-6 md:mx-6 sm:mx-4' : 'font-mono lg:text-xl md:text-lg sm:text-xl font-semibold text-black hover:border-b-2 hover:border-blue-800 hover:text-xl duration-200 ease-in-out lg:mx-6 md:mx-6 sm:mx-5'}>Home</Link>
                <Link to="/" className={color ? 'hover:text-xl duration-200 ease-in-out font-mono lg:text-xl md:text-lg sm:text-xl font-semibold text-black lg:mx-6 md:mx-6 sm:mx-4' : 'font-mono lg:text-xl md:text-lg sm:text-xl font-semibold text-black hover:border-b-2 hover:border-blue-800 hover:text-xl duration-200 ease-in-out lg:mx-6 md:mx-6 sm:mx-5'}>About</Link>
                <Link to="/" className={color ? 'hover:text-xl duration-200 ease-in-out font-mono lg:text-xl md:text-lg sm:text-xl font-semibold text-black lg:mx-6 md:mx-6 sm:mx-4' : 'font-mono lg:text-xl md:text-lg sm:text-xl font-semibold text-black hover:border-b-2 hover:border-blue-800 hover:text-xl duration-200 ease-in-out lg:mx-6 md:mx-6 sm:mx-5'}>Services</Link>
                <Link to="/" className={color ? 'hover:text-xl duration-200 ease-in-out font-mono lg:text-xl md:text-lg sm:text-xl font-semibold text-black lg:mx-6 md:mx-6 sm:mx-5' : 'font-mono lg:text-xl md:text-lg sm:text-xl font-semibold text-black hover:border-b-2 hover:border-blue-800 hover:text-xl duration-200 ease-in-out lg:mx-6 md:mx-6 sm:mx-5'}>Contact Us</Link>
                <Link to="/" className={color ? 'text-white py-4 font-semibold cursor-pointer px-10 rounded-lg bg-blue-800' : 'text-white py-4 font-semibold cursor-pointer px-10 rounded-lg bg-blue-800'}>Get Started</Link>
            </div>
        </div>
    )

}

export default MenuItems