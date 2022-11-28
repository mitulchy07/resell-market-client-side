import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CarsDetails from './CarsDetails/CarsDetails';

const Cars = () => {
  const carDeteils = useLoaderData();
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 m-5'>
      {carDeteils.map((carDetails) => (
        <CarsDetails key={carDetails._id} carDetails={carDetails}></CarsDetails>
      ))}
    </div>
  );
};

export default Cars;
