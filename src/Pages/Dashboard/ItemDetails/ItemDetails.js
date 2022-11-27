import React from 'react';

const ItemDetails = ({ cardata }) => {
  const {
    model,
    price,
    phone,
    location,
    description,
    category,
    boughtdate,
    condition,
    image,
  } = cardata;

  return (
    <div>
      <div className='card md:card-side bg-base-100 shadow-xl md:w-1/2 btn-ghost btn-outline '>
        <figure>
          <img src={image} alt='Movie' className='w-96' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>Model: {model} </h2>
          <p>Click the button to watch on Jetflix app.</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
