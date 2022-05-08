import { Link } from "react-router-dom"
const DropDown = ({isOpen, toggle}) => {
  return (
    <div className="'block lg:hidden'">
        <div className={ isOpen ? 'grid grid-rows-4 text-center  p-4 items-center text-white  bg-gray-500 lg' : 'hidden' } onClick={toggle}>
            <Link to="/Developers-Details" className='font-bold text-xl p-2  border-2 rounded-sm' >Home</Link>
            <Link to="/contact" className='text-xl mt-2 p-2  border-2 rounded-sm' >Contact</Link>
            <Link to="/about" className='text-xl mt-2 p-2  border-2 rounded-sm' >About Me</Link>
            <Link to="/portfolio" className=' text-xl mt-2 p-2  border-2 rounded-sm' >Portfolio</Link>
        </div> 
    </div>
  )
}

export default DropDown