import { useQuery } from '@tanstack/react-query';
import React from 'react';
import ReportDetails from '../ReportDetails/ReportDetails';

const ReportedItems = () => {
  const { data: reports = [] } = useQuery({
    queryKey: ['reports'],
    queryFn: async () => {
      const res = await fetch('https://server-side-virid.vercel.app/reports');
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className='grid gap-5'>
      <h1 className='text-3xl font-bold m-4 '>All reported items here:</h1>
      {reports.map((report) => (
        <ReportDetails key={report._id} data={report}></ReportDetails>
      ))}
    </div>
  );
};

export default ReportedItems;
