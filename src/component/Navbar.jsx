import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({toggle}) => {
  return (
  <nav className='flex justify-between items-center bg-slate-700 h-24 shadow-xl text-black relative' role='navigation'>
      <Link to='/Developers-Details' className='text-4xl pl-12 text-red-400 font-bold'>
                STRAKINS
           </Link>
           <div className='pt-1 md:hidden pr-4 cursor-pointer' onClick={toggle}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="red">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
           </div>
           <div class="hidden md:block text-white pr-12">
                <Link to="/Developers-Details" className='font-bold text-xl mx-5' >Home</Link>
                <Link to="/about" className='text-xl mx-5' >About Us</Link>
                <Link to="/portfolio" className=' text-xl mx-5' >Portfolio</Link>
            </div>
  </nav>
  )
}

export default Navbar