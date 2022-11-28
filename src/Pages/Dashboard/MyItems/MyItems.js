import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import ItemDetails from '../ItemDetails/ItemDetails';

const MyItems = () => {
  const advertise = {
    advertise: true,
  };
  const { user } = useContext(AuthContext);

  const { data: cart = [], refetch } = useQuery({
    queryKey: ['cart', `${user?.email}`],
    queryFn: async () => {
      const res = await fetch(
        `https://server-side-virid.vercel.app/myitems/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    const proceed = window.confirm('Are You Sure?');
    if (proceed) {
      fetch(`https://server-side-virid.vercel.app/myitems/${id}`, {
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
  const handleAdvertise = (id) => {
    fetch(`https://server-side-virid.vercel.app/myitems/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(advertise),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success('Your is advertised.', {
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

  return (
    <div className='grid grid-cols-1  gap-5 m-4 justify-center justify-self-center'>
      {cart.length === 0 ? (
        <h1 className='text-center text-3xl text-red-500'>
          You Have Not Added Any Item Yet.
        </h1>
      ) : (
        <h1>You have added {cart.length} Items</h1>
      )}
      {cart.map((cardata) => (
        <ItemDetails
          key={cardata._id}
          cardata={cardata}
          handleDelete={handleDelete}
          handleAdvertise={handleAdvertise}
        ></ItemDetails>
      ))}
    </div>
  );
};

export default MyItems;
