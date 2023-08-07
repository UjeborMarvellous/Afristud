import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import Video001 from "./Images/002.mp4";
import { Link } from "react-router-dom";
import { FaConnectdevelop } from "react-icons/fa";
import { CgCommunity } from "react-icons/cg";
import { SiSololearn } from "react-icons/si";
import Img3 from "./Images/01.jpg";
import Img2 from "./Images/02.jpg";
import Img1 from "./Images/03.jpg";
import Img4 from "./Images/05.jpg";
import Img01 from "./Images/06.jpg";
import Img02 from "./Images/man1.jpg";
import Counting from "./Counting";
import Play from './Images/Play.png'
import Newsletter from "./Newsletter";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    return () => {
      AOS.refresh();
    };
  });

  const Image = [
    {
      src: Img02,
      Name1: "Obafemi adegoke",
      Name2: "CTO",
    },
    {
      src: Img02,
      Name1: "Emmanuel",
      Name2: "Project manager",
    },
    {
      src: Img02,
      Name1: "Arize Onubiyi",
      Name2: "Devop Engineer",
    },
  ]
  const Name = [
    {
      id: 1,
      Icon: <FaConnectdevelop />,
      Title: "Digital Archive Development",
      Sub: "Preserving and sharing Africa's rich heritage through cutting-edge technology. Curating historical documents and cultural resources to foster cross-cultural understanding and empower global access to African knowledge.",
    },
    {
      id: 2,
      Icon: <CgCommunity />,
      Title: "Cross-Cultural Communication Tools",
      Sub: "Promoting international communication and cooperation. By overcoming cultural gaps for mutual appreciation, cutting-edge technology enable seamless communication and understanding across varied African communities and individuals globally.",
    },
    {
      id: 3,
      Icon: <SiSololearn />,
      Title: "African Studies E-Learning Courses",
      Sub: "Comprehensive online education on Africa's diverse cultures, history, politics, and societies. Accessible to learners worldwide, fostering cross-cultural awareness and promoting a deeper understanding of the continent's complexities.",
    },
  ];

  const service = [
    {
      Id: 1,
      Image: Img1,
      Title: "Software development and Training Services",
      Description:
        "We offer comprehensive software development services and training for businesses across diverse sectors. Our expert team equips clients with cutting-edge solutions and the knowledge to thrive in today's fast-paced technological landscape. Empowering success is at the core of our mission.",
    },
    {
      Id: 2,
      Image: Img2,
      Title: "Project Management & Training Services",
      Description:
        "For companies in a variety of industries, we provide project management and training services. Our knowledgeable team guarantees smooth project execution and provides teams with crucial skills so they can successfully accomplish their goals. At the core of our dedication is enabling success.",
    },
    {
      Id: 3,
      Image: Img3,
      Title: "Cloud services and Training.",
      Description:
        "We offer cloud services and training to companies across a range of industries. Our knowledgeable staff offers dependable and scalable cloud solutions, and our extensive training gives clients the know-how to properly use cloud technology. Success empowerment is our top priority.",
    },
    {
      Id: 4,
      Image: Img4,
      Title: "Cloud services and Training.",
      Description:
        "We offer cloud services and training to companies across a range of industries. Our knowledgeable staff offers dependable and scalable cloud solutions, and our extensive training gives clients the know-how to properly use cloud technology. Success empowerment is our top priority.",
    },
  ];
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
      <div className="text selection:bg-blue-800 selection:text-white bg-black/60 z-30 sm:bg-black/80 absolute top-0 w-full lg:pt-[17%] md:pt-[18%] sm:pt-[30%] lg:h-[52.3rem] pb-14 lg:pl-[10%] md:pl-[6%] pl-[3%] ">
        <p
          data-aos="fade-left"
          className="text-white uppercase py-1 font-bold text-sm"
        >
          AFRISTUD.COM
        </p>
        <p
          data-aos="fade-right"
          className="lg:text-4xl md:text-2xl sm:text-lg text-white Font uppercase font-black lg:py-5 md:py-2 sm:py-3"
        >
          Empowering Tech Solutions and <br />
          <span>Seamless Travel Experiences</span>
        </p>
        <p
          data-aos="fade-up"
          className="lg:text-sm md:text-sm sm:text-xs text-white lg:w-[50%] lg:tracking-wider mb-10 font-semibold"
        >
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
      <div className="bg-blue-800/10">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 pt-[100%] lg:pt-0 md:pt-32 gap-10 lg:mx-20 md:mx-20 mx-5">
          {Name.map((item) => (
            <div className="" key={item.id}>
              <div
                data-aos="fade-up-right"
                className={`bg-white overflow-hidden my-10 py-14 shadow-2xl lg:px-10 md:px-10 px-3 rounded-2xl lg:-mt-[25%] md:-mt-[10%] mt-1 z-30 relative text-center ${item.id === 1 ? "" : item.id === 2 ? "lg:-mt-[30%] pb-20" : ""
                  }`}
              >
                <div className="mx-[42%]" data-aos="fade-up">
                  <p
                    className={`text-6xl text-blue-800/70 block mx-auto ${item.id === 2 ? "text-8xl -mx-[30%]" : ""
                      }`}
                  >
                    {item.Icon}
                  </p>
                </div>
                <p className="text-xl py-2 tracking-tighter font-semibold text-blue-800">
                  {item.Title}
                </p>
                <p className="text-black font-semibold text-sm px-2 pt-3">
                  {item.Sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-blue-800/10 py-10">
        <div className="Our">
          <div className="z-20 relative">
            <h1 className="text-center text-2xl text-blue-800 uppercase font-bold border-b border-gray-400 mx-20 pb-2">
              Our Services
            </h1>
          </div>
          <div className="lg:grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-[5%] mt-10">
            <div className="">
              <div
                data-aos="fade-right"
                className="bg-white pt-10 pb-10 pl-10 lg:w-10/12 sm:mb-10 rounded-3xl"
              >
                <h1 className="text-xl font-bold border-b border-gray-400/40 pb-8">
                  Categories
                </h1>
                <div className="capitalize py-5">
                  <ul>
                    <li>
                      <p className="text-sm capitalize font-semibold py-3">
                        IT Solutions
                      </p>
                    </li>
                    <li>
                      <p className="text-sm capitalize font-semibold py-3">
                        Tech Development
                      </p>
                    </li>
                    <li>
                      <p className="text-sm capitalize font-semibold py-3">
                        Project Management
                      </p>
                    </li>
                    <li>
                      <p className="text-sm capitalize font-semibold py-3">
                        E-Learning and Online Education
                      </p>
                    </li>
                    <li>
                      <p className="text-sm capitalize font-semibold py-3">
                        Data Science and Economic Analysis
                      </p>
                    </li>
                    <li>
                      <p className="text-sm capitalize font-semibold py-3">
                        Travel agency and student accommodation
                      </p>
                    </li>
                    <li>
                      <p className="text-sm capitalize font-semibold py-3">
                        General Contracts
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="button border-t border-gray-400/40 pt-10 w-full">
                  <Link
                    to="service"
                    className="text-sm text-center mx-auto font-semibold bg-blue-800 w-full text-white py-3 mt-6 px-[30%] rounded-full"
                  >
                    ALL SERVICES
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 col-span-2 gap-10"
              data-aos="fade-left"
            >
              {service.map((service, index) => {
                return (
                  <figure
                    className={`cursor-pointer lg:mb-0 md:mb-5 sm:mb-5 ${service.Id === 3 ? "-mt-[10%]" : ""
                      }`}
                  >
                    <img
                      src={service.Image}
                      alt=""
                      className="w-[100%] rounded-t-2xl"
                    />
                    <figcaption className="bg-white rounded-b-2xl py-8 lg:px-10 md:px-5 sm:px-5">
                      <p className="text-center font-bold text-xl md:ml-5 sm:ml-5">
                        {service.Title}
                      </p>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="our-mission lg:my-20 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 py-10 lg:px-32 gap-32">
        <div className="two my-auto text-white bg-black/50 lg:p-16 md:p-10 p-3">
          <p className="text-5xl font-semibold">Our Mission</p>
          <p className="py-10 relative">
            The utilization of technology to investigate, communicate, and
            promote Africa's rich cultural legacy and historical contributions
            can help to enhance African studies. By encouraging cross-cultural
            appreciation and understanding, we hope to enable people everywhere
            to engage with the diversity and complexity of the African
            continent.
          </p>
        </div>
        <div className="bg sm:-mt-32 md:-mt-32 lg:mt-auto">
          <p className="bg-black/50 py-60 px-60 hidden lg:block md:hidden ml-60 -mt-16 rounded-full absolute"></p>
          <p className="bg-black/50 py-60 px-60 hidden lg:block md:hidden ml-60 mt-16 rounded-full absolute"></p>
          <div className="two rounded-e-3xl relative">
            <img src={Img01} alt="" className=" md:h-auto lg:h-auto object-cover w-full" />
          </div>
        </div>
      </div>
      <div className="teamMate bg-blue-800/10 pt- pb-16 lg:px-20 md:px-10 px-5">
        <h1 data-aos="fade-up" className="text-3xl text-black py-2 font-semibold text-center">Team Mate</h1>
        <p data-aos="fade-down" className="text-center text-lg text-black py-2">we all come together to give you the best experince you will expect to see on your projects</p>
        <div data-aos="fade-up-left" className="image grid lg:grid-cols-3 md:grid-cols-1 lg:mx-10 md:mx-10 mx-2 gap-10 pt-8">
          {Image.map((Image, index) => {
            return (
              <div data-aos="fade-up-left" className="image bg-white rounded-t-3xl" key={index}>
                <img src={Image.src} alt="" className="bg-white rounded-t-3xl" />
                <div className="rounded-b-2xl pt-5 text-center">
                  <p className="text-3xl font-bold">{Image.Name1}</p>
                  <p className="pb-3 font-semibold pt-3 text-sm">{Image.Name2}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="z-40 relative">
        <div className="relative pt-[1%] px-[6%] bg-black/90">
          <h1 className="lg:text-3xl md:text-xl sm:text-lg font-semibold text-white pt-32">A Few Facts About Afristud</h1>
          <div className="lg:grid lg:grid-cols-2 gap-20 pt-[4%] ">
            <Counting />
            <div className="video pb-10">
              <Link to="https://www.youtube.com/watch?v=HndV87XpkWg" className="rounded-2xl">
                <img src={Img01} alt="" className="rounded-2xl h-[80%] w-full relative object-cover" />
                <img src={Play} alt="" className="absolute lg:-mt-[13.7%] lg:mx-[19%] sm:-mt-[45%] sm:mx-[43%]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <div className='lg:pt-[10%] md:pt-[20%] sm:pt-[30%] bg-black/90 lg:pb-[2%] md:pb-[5%] sm:pb-[8%]'>
        <p className='lg:text-sm md:text-sm sm:text-xs text-white text-center border-t border-white/30 pt-10 lg:mx-28'>COPYRIGHT © 2023 IDAHVIS NIG LTD ALL RIGHTS RESERVED.</p>
      </div>
    </div>
  );
}

export default Home;
