import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import OrderDetails from '../OrderDetails/OrderDetails';

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data: orders = [] } = useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      const res = await fetch(
        `https://server-side-virid.vercel.app/myorders/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className='grid gap-5 p-4'>
      <h1>My Orders: {orders.length} </h1>
      {orders.map((order) => (
        <OrderDetails key={order._id} cardata={order}></OrderDetails>
      ))}
    </div>
  );
};

export default MyOrders;
