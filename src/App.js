import { Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import './App.css';
import DevDetails from './component/DevDetails';
import DevList from './component/DevList';
import Navbar from './component/Navbar';
import DropDown from './component/DropDown';
import AboutUs from './component/pages/AboutUs';


const devUrl = "https://jsonplaceholder.typicode.com/users";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }; 

  const [devDetails, setDevDetails] = useState([]);

  const getDevDetails = async () => {
    const response = await fetch(devUrl);
    const devDetails = await response.json();
    setDevDetails(devDetails);
    console.log(devDetails);
  };

  // const handleClick = (data) => {
    
  // }

  useEffect(() => {
    getDevDetails();
  }, []);

  useEffect(() => {
    const hideMenu = () => {
      if(window.innerWidth > 768 && isOpen) {
        isOpen(false)
        console.log('I resized here')
      }      
    }
  })


  return (
    <>
      < Navbar toggle={toggle} />
      < DropDown isOpen={isOpen} toggle={toggle}/>
      <div className="bg-slate-900">
            <Routes>
              <Route path='/Developers-Details' exact element={< DevList devDetails={devDetails} /> }/>
              <Route path='/:name' element={< DevDetails devDetails={devDetails} />} />
              <Route path='/about' element={< AboutUs />} />
              <Route path='*' element={< DevDetails devDetails={devDetails} />} />
            </Routes> 
      </div>
    </>

  );
}

export default App;
