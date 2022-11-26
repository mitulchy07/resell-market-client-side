import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  const [categories, setCategoies] = useState([]);
  useEffect(() => {
    fetch('https://server-side-virid.vercel.app/categories')
      .then((res) => res.json())
      .then((data) => setCategoies(data));
  }, []);

  return (
    <div className='my-5'>
      <h1 className='text-center text-5xl font-bold m-5'>Choose Your Brand:</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 content-around'>
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
