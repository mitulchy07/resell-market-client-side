import React from 'react';
import { Link } from 'react-router-dom';

const CarsDetails = ({ carDetails }) => {
  const {
    email,
    model,
    price,
    phone,
    location,
    description,
    category,
    boughtdate,
    condition,
    image,
    postdate,
    booked,
  } = carDetails;
  return (
    <div>
      <div>
        <div className='card md:card-side bg-base-100 shadow-xl w-auto btn-ghost btn-outline '>
          <figure>
            <img
              src={image}
              alt='Movie'
              className='md:h-full w-96 rounded p-4'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>Model: {model} </h2>
            <p>Price: ${price}</p>
            <p>Description: {description}</p>
            <p>Brand: {category}</p>
            <p>First Buying Date: {boughtdate}</p>
            <p>Condition: {condition}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Place: {location}</p>
            <p>Posted for sell on: {postdate}</p>
            <div className='flex m-5'>
              {booked === false ? (
                <Link className='btn bg-green-700 text-white'>Book Now</Link>
              ) : (
                <Link className='btn bg-gray-500 text-white disabled:opacity-75'>
                  Booked Already
                </Link>
              )}
              <Link className='btn mx-2 bg-red-500 text-white'>
                Report to admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsDetails;
