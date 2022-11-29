import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import { Contact } from '../Contact/Contact';

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className='container mx-auto'>
      <Banner></Banner>
      <Categories></Categories>
      {user?.uid ? <Dashboard></Dashboard> : ''}

      <Contact></Contact>
    </div>
  );
};

export default Home;
