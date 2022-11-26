import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  const { name, _id, img } = category;
  return (
    <div>
      <div className='card h-96 bg-base-100 shadow-xl image-full '>
        <figure>
          <img src={img} alt='' className='w-full' />
        </figure>
        <div className='card-body justify-center justify-self-center'>
          <Link
            to={`category/${name}`}
            className='btn btn-warning btn-outline w-36 text-2xl'
          >
            {name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
