import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  const { data: categories = [], refetch } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await fetch(
        'https://server-side-virid.vercel.app/categories'
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className='my-5'>
      <h1 className='text-center text-5xl font-bold m-5'>Choose Your Brand:</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 content-around'>
        {categories.map((category) => (
          <CategoryCard
            key={category._id}
            category={category}
            refetch={refetch}
          ></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
