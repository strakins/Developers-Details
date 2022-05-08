import React from "react";
import { Link } from "react-router-dom";
import Typical from 'react-typical';
import MY_PICS from '../assets/MY_PICS.jpg';
import HireMe from "../HireMe";

const AboutUs = () => {
  return (
    <div className="lg:h-screen bg-inherit">
      <div className='bg-gradient-to-tr  from-gray-500 to-green-600 relative h-96 '>
        <img src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_960_720.jpg" 
        className="h-96 w-full object-cover absolute mix-blend-overlay"
         alt="" />
         <div className="p-24">
           <h3 className="text-slate-100 text-2xl lg:text-6xl font-bold mb-8">About Me</h3>
           <Link to="" className="border-2  py-3 px-8 rounded-lg bg-purple-500 cursor-pointer text-white">Portfolio</Link>
         </div>
      </div>
      <div className="lg:flex mb-4">
        <div class="flex flex-1 flex-col justify-center h-64 md:h-auto items-center">
                <h3 className='text-lg text-white md:text-2xl lg:text-3xl font-bold'>Welcome, I'm Blessing</h3>
                <h2 className='py-5 text-2xl text-red-600 md:text-3xl lg:text-4xl font-bold'>
                  {" "}
                  <Typical 
                    loop={Infinity}
                    steps={[
                      "Front-End Developer",
                      2500,
                      " Web-dev Trainer",
                      2500,
                      "Blockchain Enthausiat",
                      2500,
                      "Eloquent Speaker",
                      2500,
                      "Emerging Software Developer",
                      2500,
                    ]}
                  />
                </h2>
                < HireMe />
              </div>
              <div class="flex flex-1 items-center pt-12">
                <img src={MY_PICS} alt="" className='block mx-auto h-80 self-pics scale-75 hover:scale-100 duration-500' />
              </div>
      </div>
    </div>
  );
};

export default AboutUs;
