import React from 'react';
import { Link } from 'react-router-dom';


const DevDetails = () => {


  
  // const [details, setDetails] = useState([]);
  // const {email} = useParams();

  // useEffect(() => {
  //   const showDev = async () => {
  //     const response = await fetch(`https://jsonplaceholder.typicode.com/users/Sincere@april.biz`)
  //     const details = await response.json();
  //     setDetails(details)
  //     console.log(details)
  //   }

  //   showDev();
  // }, [email])


  return (
    <div className='lg:pt-44 grid lg:place-items-center h-screen'>
        <section className='h-96 bg-cyan-50 opacity-75 lg:w-1/3 p-8'>
          <Link to='/Developers-Details' className='border px-3 py-2 bg-cyan-200 rounded-md cursor-pointer '>Back</Link>
          <article className='p-2 mt-6 ' >
              <h3 className='text-6xl text-center mb-2'>  </h3>
              <p className='text-center text-xl tracking-wider'>Multi-layered client-server neural-net</p>
              <div className='pt-4'>
                <h1 className='text-4xl'>General Info</h1>
                <h4 className='pt-2 text-xl'><span className='font-semibold mr-4'>Address:</span>Adoeto Street  </h4>
              </div>
          </article>
        </section>
    </div>
  )
}

export default DevDetails