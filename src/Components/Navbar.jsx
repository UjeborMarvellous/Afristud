import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiAfrica } from 'react-icons/gi'
import { IoMdClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import MenuItems from './MenuItems';

function Navbar() {
    
    const [active, setActive] = useState(false);

    const showMenu = () => {
        setActive(!active);
    };

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
            <nav className={color ? "transition-opacity z-50 delay-150 ease-linear duration-300 bg-black fixed top-0 w-full py-6 translate-y scroll-smooth px-[6%]" : "z-50 absolute w-full lg:py-10 md:py-5 sm:py-5 px-[6%]"}>
                <div className={color ? " navLinks  flex justify-between" : "navLinks  justify-between flex"}>
                    <div className="logo flex">
                        <Link to="/" className='text-white flex font-black lg:text-3xl md:text-2xl sm:text-2xl italic'>Afri <span><GiAfrica className='lg:text-4xl md:text-4xl py-auto sm:text-3xl text-blue-800 font-black' /></span> stud</Link>
                    </div>
                    <div className="Open absolute right-6 top-10 lg:hidden md:hidden scale-150">
                        <FiMenu
                            className="text-2xl text-white cursor-pointer font-bold md:hidden lg:hidden"
                            onClick={showMenu}
                        />
                    </div>
                    <div className="test my-auto sm:hidden md:hidden lg:block">
                        <Link to="/" className={color ? 'hover:text-xl duration-200 uppercase ease-in-out lg:text-xl md:text-lg sm:text-sm text-white lg:mx-6 md:mx-6 sm:mx-4 hover:border-b-2 hover:border-blue-800' : 'uppercase lg:text-sm font-semibold md:text-sm sm:text-sm upprecase text-white hover:border-b-2 hover:border-blue-800 hover:text-xl duration-200 ease-in-out lg:mx-6 md:mx-3 sm:mx-5'}>Home</Link>
                        <Link to="/" className={color ? 'hover:text-xl duration-200 uppercase ease-in-out lg:text-xl md:text-lg sm:text-sm text-white lg:mx-6 md:mx-6 sm:mx-4 hover:border-b-2 hover:border-blue-800' : 'uppercase lg:text-sm font-semibold md:text-sm sm:text-sm upprecase text-white hover:border-b-2 hover:border-blue-800 hover:text-xl duration-200 ease-in-out lg:mx-6 md:mx-3 sm:mx-5'}>About</Link>
                        <Link to="/" className={color ? 'hover:text-xl duration-200 uppercase ease-in-out lg:text-xl md:text-lg sm:text-sm text-white lg:mx-6 md:mx-6 sm:mx-4 hover:border-b-2 hover:border-blue-800' : 'uppercase lg:text-sm font-semibold md:text-sm sm:text-sm upprecase text-white hover:border-b-2 hover:border-blue-800 hover:text-xl duration-200 ease-in-out lg:mx-6 md:mx-3 sm:mx-5'}>Services</Link>
                        <Link to="/" className={color ? 'hover:text-xl duration-200 uppercase ease-in-out lg:text-xl md:text-lg sm:text-sm text-white lg:mx-6 md:mx-6 sm:mx-5 hover:border-b-2 hover:border-blue-800' : 'uppercase lg:text-sm font-semibold md:text-sm sm:text-sm upprecase text-white hover:border-b-2 hover:border-blue-800 hover:text-xl duration-200 ease-in-out lg:mx-6 md:mx-3 sm:mx-5'}>Contact Us</Link>
                        <Link to="/" className={color ? 'text-white py-4 font-semibold cursor-pointer px-10 rounded-lg bg-blue-600' : 'text-white py-4 font-semibold cursor-pointer px-10 rounded-lg bg-blue-800'}>Get Started</Link>
                    </div>
                </div>
                    <MenuItems showMenu={showMenu} active={active} />
            </nav>
        </div>
    )
}

export default Navbar