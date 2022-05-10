import { Link } from "react-router-dom";
import Home from "../component/Home";


const DevList = ({devDetails}) => {
  


  return (
    <>
      < Home/>
      <h2 className="text-gray-200 text-center text-2xl lg:text-5xl py-3">Explore Our Experts</h2>
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {devDetails.map(({ email, name, company, address, phone, website, id }) => {
          return (
            <Link to={`/${name}`}  key={id} className='bg-gray-400 text-white h-auto py-2 pl-6 text-center text'>
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
