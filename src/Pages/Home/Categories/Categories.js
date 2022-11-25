import React from 'react';

const Categories = () => {
  return (
    <div className='my-5'>
      <h1 className='text-center text-5xl font-bold my-2'>Categories:</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 mx-auto justify-center text-center'>
        <div className='card w-96 bg-base-100 shadow-xl'>
          <figure className='px-10 pt-10'>
            <img
              src='https://placeimg.com/400/225/arch'
              alt='Shoes'
              className='rounded-xl'
            />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title'>BMW</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions'>
              <button className='btn btn-primary'>See more</button>
            </div>
          </div>
        </div>
        <div className='card w-96 bg-base-100 shadow-xl'>
          <figure className='px-10 pt-10'>
            <img
              src='https://placeimg.com/400/225/arch'
              alt='Shoes'
              className='rounded-xl'
            />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title'>Renault</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions'>
              <button className='btn btn-primary'>See more</button>
            </div>
          </div>
        </div>
        <div className='card w-96 bg-base-100 shadow-xl'>
          <figure className='px-10 pt-10'>
            <img
              src='https://placeimg.com/400/225/arch'
              alt='Shoes'
              className='rounded-xl'
            />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title'>Audi</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className='card-actions'>
              <button className='btn btn-primary'>See more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
