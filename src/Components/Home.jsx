import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import Video001 from "./Images/002.mp4";
import { Link } from "react-router-dom";


function Home() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        });
        return () => {
            AOS.refresh();
        };
    });
    return (
        <div>
            <Video
                autoPlay
                loop
                muted
                controls
                className="w-full lg:h-auto md:h-auto relative sm:hidden md:block scroll-smooth object-cover top-0"
            >
                <source src={Video001} type="video/webm" />
                Your browser does not support the video tag.
            </Video>
            <div className="text bg-black/60 z-40 sm:bg-black/80 absolute top-0 w-full lg:pt-[17%] md:pt-[15%] sm:pt-[30%] lg:h-[52.3rem] pb-14 pl-[10%]">
                <p data-aos="fade-left" className="text-white uppercase py-1 font-bold text-sm">
                    AFRISTUD.COM
                </p>
                <p data-aos="fade-right" className="lg:text-4xl md:text-4xl sm:text-2xl text-white Font uppercase font-black lg:py-5 md:py-2 sm:py-3">
                    Empowering Tech Solutions and <br /><span>Seamless Travel Experiences</span>
                </p>
                <p data-aos="fade-up" className="lg:text-sm md:text-lg sm:text-xs text-white lg:w-[50%] tracking-wider mb-10 font-semibold">
                    Unlocking Opportunities Worldwide. Empowering with Innovative Tech
                    Solutions and Seamlessly Facilitating International Travel for
                    Memorable Journeys. Your Partner for Boundless Horizons and
                    Unforgettable Experiences in the Tech-savvy Global Landscape.
                </p>
                <div data-aos="fade-up-right" className="read">
                    <Link
                        to="/"
                        className="py-4 lg:px-10 md:px-16 sm:px-8 -mt-16 rounded-xl text-white bg-blue-800 uppercase text-sm font-semibold"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
