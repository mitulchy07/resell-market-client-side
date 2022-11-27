import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import ItemDetails from '../ItemDetails/ItemDetails';

const MyItems = () => {
  //   const carData = useLoaderData();
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(`https://server-side-virid.vercel.app/myitems/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, [user?.email]);
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
            const remaining = cart.filter((odr) => odr._id !== id);
            setCart(remaining);
          }
        });
    }
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
        ></ItemDetails>
      ))}
    </div>
  );
};

export default MyItems;
