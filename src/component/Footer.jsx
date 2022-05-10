import React from 'react'
import Chats from  '../assets/whatsapp2.png'

const Footer = () => {
  return (
    <div className='h-24 bg-slate-800 shadow-2xl text-center flex justify-center pt-4 text-white'>
        <h4 className='px-2'>Designed by Strakins</h4>
        <a href="https://wa.me/2347063003993"
        className="whatsapp_float pt-1"
        target="_blank"
        rel="noopener noreferrer"
        >
            <img src={Chats} alt=""  className='h-5 w-5'/>
        </a>
    </div>
  )
}

export default Footer