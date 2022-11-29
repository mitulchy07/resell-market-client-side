import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [role, setRole] = useState('buyer');
  useEffect(() => {
    fetch(`https://server-side-virid.vercel.app/dashboard/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setRole(data.role));
  }, [user]);
  return (
    <div>
      <Header></Header>
      <div>
        <div className='drawer drawer-mobile'>
          <input
            id='dashboard-drawer'
            type='checkbox'
            className='drawer-toggle'
          />
          <div className='drawer-content'>
            <Outlet></Outlet>
          </div>
          <div className='drawer-side bg-gray-300 text-white '>
            <label
              htmlFor='dashboard-drawer'
              className='drawer-overlay'
            ></label>
            <ul className='menu p-4 w-80 bg-black-100 text-base-content'>
              {/* <!-- Sidebar content here --> */}
              {role === 'seller' ? (
                <li>
                  <Link to='/additem'>Add Item</Link>
                </li>
              ) : (
                ''
              )}
              {role === 'seller' ? (
                <li>
                  <Link to={`/myitems/${user?.email}`}>See your items</Link>
                </li>
              ) : (
                ''
              )}
              {role === 'buyer' ? (
                <li>
                  <Link to='/myorders'>My Oreders</Link>
                </li>
              ) : (
                ''
              )}
              {role === 'admin' ? (
                <li>
                  <Link to='/allbuyers'>See all buyers</Link>
                </li>
              ) : (
                ''
              )}
              {role === 'admin' ? (
                <li>
                  <Link to='/allsellers'>See all sellers</Link>
                </li>
              ) : (
                ''
              )}
              {role === 'admin' ? (
                <li>
                  <Link to='/reporteditems'>Reported Items</Link>
                </li>
              ) : (
                ''
              )}
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
