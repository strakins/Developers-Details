import React from "react";
import Typical from 'react-typical';
import Phones from "../assets/phones.jpg";
import Wordpress from "../assets/wordpress.png";
import Coding from "../assets/browzer.jpg";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="bg-blue-300 h-fit mb-4">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl py-5 text-blue-900  font-bold ">
        {" "}
                <Typical 
                  loop={Infinity}
                  steps={[
                    "Welcome to Strakins Web Development Agency",
                    4000,
                    "Contact Us For Any of the Following Services: ",
                    2500,
                    "Front-End Web Development 💻 ",
                    2500,
                    "WordPress Web-Desig",
                    2500,
                    "Blockchain / Web3 Consulatancy",
                    2500,
                    "Web Development Training and Mentorship",
                    2500,
                  ]}
                />
      </h2>
      <div className="flex justify-center pt-6">
        <Link 
            to="/contact" 
            className='py-2 px-6 lg:py-4 lg:px-10 text-white 
             border-2 rounded-full text-xl
            hover:bg-blue-800 transition duration-300 ease-in-out animate-bounce'> 
                Hire Me 
        </Link>
        <Link 
            to="/portfolio" 
            className='py-2 px-6 lg:py-4 lg:px-10 lg:mx-6 mx-3 
            text-white bg-blue-800 text-xl
            hover:bg-blue-500 rounded-full '>
                 Explore
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-3 p-4 md:pl-8 lg:pl-28">
        <div className="card">
          <img
            src={Phones}
            alt="Mobile Friendly Design"
            className=" lg:h-80  lg:w-full"
          />
          <h5 className="text-center pt-3 uppercase font-semibold">UI/UX Designs</h5>
        </div>
        <div className="card">
          <img
            src={Wordpress}
            alt="Mobile Friendly Design"
            className="lg:h-80  lg:w-full"
          />
          <h5 className="text-center pt-3 uppercase font-semibold">Wordpress Website Development</h5>
        </div>
        <div className="card">
          <img
            src={Coding}
            alt="Mobile Friendly Design"
            className="lg:h-80  lg:w-full"
          />
          <h5 className="text-center pt-3 uppercase font-semibold">Responsive Web-Apps</h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
