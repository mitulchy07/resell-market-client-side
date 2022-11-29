import axios from 'axios';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const CarsDetails = ({ carDetails }) => {
  const booking = {
    booked: true,
  };
  const report = {
    reported: true,
  };
  const {
    _id,
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
    reported,
    sellername,
    verified,
  } = carDetails;
  const { user, loading } = useContext(AuthContext);

  const handleBooking = (id) => {
    fetch(`https://server-side-virid.vercel.app/booking/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        axios
          .post('https://server-side-virid.vercel.app/orders', {
            email: email,
            model: model,
            price: price,
            phone: phone,
            location: location,
            description: description,
            category: category,
            boughtdate: boughtdate,
            condition: condition,
            image: image,
            postdate: postdate,
            booked: booked,
            buyeremail: user?.email,
          })
          .then((res) => console.log('posting data', res));
        if (data.modifiedCount > 0) {
          toast.success('Booked', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        }
      });
  };
  const handleReport = (id) => {
    fetch(`https://server-side-virid.vercel.app/report/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(report),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success('Reported', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
        }
      });
  };
  return (
    <div>
      {loading ? <progress className='progress w-56 m-5'></progress> : ''}
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
            <p>Contact Email: {email}</p>
            <p>
              Posted By:
              {sellername}
              {verified ? (
                <h2>(Verified Seller)</h2>
              ) : (
                <h2 className='font-bold'>(Not Verified yet)</h2>
              )}{' '}
            </p>
            <p>Place: {location}</p>

            <p>Posted for sell on: {postdate}</p>
            <div className='md:flex m-5 '>
              {booked === false ? (
                <Link
                  onClick={() => handleBooking(_id)}
                  className='btn text-white'
                >
                  Book Now
                </Link>
              ) : (
                <Link className='btn bg-gray-500 text-white disabled:opacity-75'>
                  Booked
                </Link>
              )}

              {reported === false ? (
                <Link
                  onClick={() => handleReport(_id)}
                  className='btn mx-2 bg-red-500 text-white'
                >
                  Report to admin
                </Link>
              ) : (
                <Link className='btn mx-2 bg-red-300 text-white'>
                  Under Review
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarsDetails;
