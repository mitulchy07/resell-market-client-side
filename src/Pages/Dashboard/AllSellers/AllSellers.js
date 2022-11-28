import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import TableRow from '../TableRow/TableRow';

const AllSellers = () => {
  const { loading } = useContext(AuthContext);
  const verified = {
    verified: true,
  };

  const { data: sellers = [], refetch } = useQuery({
    queryKey: ['sellers'],
    queryFn: async () => {
      const res = await fetch('https://server-side-virid.vercel.app/sellers');
      const data = await res.json();
      return data;
    },
  });

  const handleVerified = (id) => {
    fetch(`https://server-side-virid.vercel.app/user/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(verified),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success('Verified', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
          });
          refetch();
        }
        console.log(data);
      });
  };
  const handleDelete = (id) => {
    const proceed = window.confirm('Are You Sure?');
    if (proceed) {
      fetch(`https://server-side-virid.vercel.app/user/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.warn('Deleted', {
              position: 'top-center',
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'dark',
            });
            refetch();
          }
        });
    }
  };
  return (
    <div>
      {loading ? <progress className='progress w-56 m-5'></progress> : ''}
      <div className='md:grid grid-cols-5 gap-12 my-2 hidden'>
        <div className='text-xl font-bold'> Name </div>
        <div className='text-xl font-bold'>Email</div>
        <div className='text-xl font-bold'>Verification or Delete</div>
      </div>
      {sellers.map((seller) => (
        <TableRow
          key={seller._id}
          data={seller}
          handleVerified={handleVerified}
          handleDelete={handleDelete}
        ></TableRow>
      ))}
    </div>
  );
};

export default AllSellers;
