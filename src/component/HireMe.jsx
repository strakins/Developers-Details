import React from 'react'
import { Link } from 'react-router-dom'

const HireMe = () => {
  return (
    <div className='pt-8'>
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
  )
}

export default HireMe