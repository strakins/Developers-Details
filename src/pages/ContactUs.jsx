import React from 'react'
import { Link } from 'react-router-dom';



const ContactUs = () => {

    const handleSubmit = (e) => {
        alert("Thank you, we will reach out soon")
    }


  return (
    <div className='h-screen bg-inherit'>
        <div className='bg-gradient-to-tr  from-gray-700 to-blue-400 relative h-96 '>
        <img src="https://cdn.pixabay.com/photo/2017/08/07/18/28/businessman-2606509_960_720.jpg" 
         className="h-96 w-full object-cover absolute mix-blend-overlay"
         alt="" />
         <div className="p-24">
           <h3 className="text-slate-100 text-2xl lg:text-6xl font-bold mb-8">Contact Us</h3>
           <Link 
                to="/about" 
                className="border-2  py-3 px-8 
                rounded-lg bg-purple-500 
                cursor-pointer text-white
                hover:bg-blue-800 transition duration-300 
                ease-in-out animate-bounce"
                >About Us
            </Link>
        </div>
        <div className='pt-28 lg:pt-20 flex items-center flex-col'>
            <h2 className='text-2xl lg:text-5xl tracking-wider mb-3 text-white'>Let's Talk</h2>
            <hr className='w-12 lg:w-24 bg-blue-700 border-2 border-blue-700 '/>
        </div>
        <div className=' grid lg:grid-cols-2 gap-3 pt-3 px-4'>
            <div className='hidden lg:block '>
                <div className='bg-gradient-to-tl  from-gray-500 to-red-300 relative h-80 '>
                <img src="https://cdn.pixabay.com/photo/2019/05/10/14/23/contact-us-4193637_960_720.jpg" 
                className="h-80 w-full rounded-sm object-cover absolute mix-blend-overlay"
                alt="" />
                <div className="p-24">
                <h3 className="text-black text-xl lg:text-4xl font-bold mb-8">Send Us A Request Today</h3>
                </div>
                </div>
            </div>
            <div>
                <form action="" onSubmit={handleSubmit} method="get">
                    <div>
                        <input type="text" name='name' placeholder='Name' className='form-control' />
                    </div>
                    <div>
                        <input type="number" name='phone' placeholder='Phone Number' className='form-control' />
                    </div>
                    <div>
                        <input type="email" name='email' placeholder='Email' className='form-control' />
                    </div>
                    <div>
                        <textarea name="message" id="" placeholder='Tell Us More' cols="13" rows="6" className='form-control'></textarea>
                    </div>
                    <button className='bg-blue-900 rounded-sm p-2'>Submit</button>
                </form>
            </div>
        </div>        
      </div>
    </div>
  )
}

export default ContactUs