import { Link } from "react-router-dom"
const DropDown = ({isOpen, toggle}) => {
  return (
    <div className="'block lg:hidden'">
        <div className={ isOpen ? 'grid grid-rows-4 text-center items-center text-white  bg-gray-500 lg' : 'hidden' } onClick={toggle}>
            <Link to="/Developers-Details" className='font-bold text-xl p-2' >Home</Link>
            <Link to="/about" className='text-xl' >About Me</Link>
            <Link to="/portfolio" className=' text-xl ' >Portfolio</Link>
        </div>
    </div>
  )
}

export default DropDown