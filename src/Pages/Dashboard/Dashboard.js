import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BuyerDashboard from './BuyerDashboard/BuyerDashboard';
import SellerDashboard from './SellerDashboard/SellerDashboard';

const Dashboard = () => {
  const data = useLoaderData();
  return (
    <div>
      {data?.role === 'seller' ? (
        <SellerDashboard></SellerDashboard>
      ) : (
        <BuyerDashboard></BuyerDashboard>
      )}
    </div>
  );
};

export default Dashboard;
