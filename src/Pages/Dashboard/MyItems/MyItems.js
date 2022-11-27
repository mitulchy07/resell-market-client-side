import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ItemDetails from '../ItemDetails/ItemDetails';

const MyItems = () => {
  const carData = useLoaderData();

  return (
    <div className='grid grid-cols-1 gap-5 m-4 justify-center justify-self-center'>
      {carData.length === 0 ? (
        <h1 className='text-center text-3xl text-red-500'>
          You Have Not Added Any Item Yet.
        </h1>
      ) : (
        ''
      )}
      {carData.map((cardata) => (
        <ItemDetails key={cardata._id} cardata={cardata}></ItemDetails>
      ))}
    </div>
  );
};

export default MyItems;
