import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const devUrl = "https://jsonplaceholder.typicode.com/users";

const DevList = () => {
  const [devDetails, setDevDetails] = useState([]);

  const getDevDetails = async () => {
    const response = await fetch(devUrl);
    const devDetails = await response.json();
    setDevDetails(devDetails);
    console.log(devDetails);
  };

  useEffect(() => {
    getDevDetails();
  }, []);


  return (
    <>
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {devDetails.map(({ email, name, company, address, phone, website, id }) => {
          return (
            <Link to={`/${email}`} key={id} className='bg-gray-400 text-white h-auto py-2 pl-6 text-center text'>
              <h3 className="text-4xl"> {name} </h3>
              <h5 className="text-xl pt-4 tracking-wide">{company.catchPhrase}</h5>
              {" "}
              <div className="text-left pt-8 pb-4">
                <h4 className="text-3xl font-semibold">General Info</h4>
                <h6><span className="font-semibold ">Email: </span>{email}</h6>
                <h6><span className="font-semibold">Phone: </span>{phone}</h6>
                <h6><span className="font-semibold">Website: </span>{website}</h6>
                <h6><span className="font-semibold">Address: </span>{address.street}, {address.suite}, {address.city}, {address.zipcode}</h6>

              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default DevList;
