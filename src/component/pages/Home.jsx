import React from "react";
import Typical from 'react-typical';
import Phones from "../assets/phones.jpg";
import Wordpress from "../assets/wordpress.png";
import Coding from "../assets/browzer.jpg";
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
      <div className="grid md:grid-cols-3 gap-3 p-4 md:pl-8 lg:pl-28">
        <div className=" cursor-pointer ">
          <img
            src={Phones}
            alt="Mobile Friendly Design"
            className=" lg:h-80 lg:w-96  rounded-xl"
          />
          <h5 className="">UI/UX Designs</h5>
        </div>
        <div className=" cursor-pointer ">
          <img
            src={Wordpress}
            alt="Mobile Friendly Design"
            className=" lg:h-80 lg:w-96  rounded-xl"
          />
          <h5 className="">Wordpress Website Development</h5>
        </div>
        <div className=" cursor-pointer ">
          <img
            src={Coding}
            alt="Mobile Friendly Design"
            className="md:h-36 lg:h-80 lg:w-96  rounded-xl"
          />
          <h5 className="">Responsive Web-Apps</h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
