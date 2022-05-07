import React from "react";
import { Link, useParams } from "react-router-dom";

const DevDetails = ({ devDetails }) => {
  const { name } = useParams();

  return (
    <div className="lg:pt-44 grid lg:place-items-center h-screen">
      <section className="h-fit bg-cyan-50 opacity-75 lg:w-1/3 p-8">
        <Link
          to="/Developers-Details"
          className="border px-3 py-2 bg-cyan-200 rounded-md cursor-pointer "
        >
          Back
        </Link>
        <article className="p-2 mt-6 ">
          {devDetails
            .filter((select) => select.name === name)
            .map((select, index) => {
              return <div key={index}>
                  <h3 className='text-5xl text-center mb-2'> {name} </h3>
                  <p className='text-2xl tracking-wider pt-3 text-center mb-2'> {select.company.catchPhrase} </p>
                  <div className="pt-8 pb-4">
                    <h2 className='text-2xl mb-3 font-bold'>Personal Information</h2>
                    <p className='text-xl tracking-wider'>{select.email}</p>               
                    <p className='text-xl tracking-wider'>{select.website}</p>               
                    <p className='text-xl tracking-wider'>{select.phone}</p>               
                    <p className='text-xl tracking-wider'>{select.address.street}, {select.address.suite}, {select.address.city}</p>               
                  </div>
              </div>         
            })}
        </article>
      </section>
    </div>
  );
};

export default DevDetails;
