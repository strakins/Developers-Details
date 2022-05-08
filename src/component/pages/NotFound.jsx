import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        <h1 className='text-white text-2xl lg:text-4xl mb-8'>Sorry The Page Is Not Found</h1>
        <Link to='/Developers-Details' className='border-0 rounded-sm shadow-lg px-8 py-2
         bg-blue-300 '>Home</Link>
    </div>
  )
}

export default NotFound