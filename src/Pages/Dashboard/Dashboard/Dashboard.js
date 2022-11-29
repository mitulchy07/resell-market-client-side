import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CarsDetails from '../../Cars/CarsDetails/CarsDetails';

const Dashboard = () => {
  const { data: advertised = [] } = useQuery({
    queryKey: ['advertised'],
    queryFn: async () => {
      const res = await fetch(
        'https://server-side-virid.vercel.app/advertised'
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className='grid grid-cols-1 md:px-10  gap-5 m-4 justify-center justify-self-center'>
      <h1 className='text-warning font-bold text-3xl my-5'>
        Those items sellers want you to see:{' '}
      </h1>
      {advertised.map((advertisement) => (
        <CarsDetails
          key={advertisement._id}
          carDetails={advertisement}
        ></CarsDetails>
      ))}
    </div>
  );
};

export default Dashboard;
