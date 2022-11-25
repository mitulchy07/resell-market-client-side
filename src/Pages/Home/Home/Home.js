import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import { Contact } from '../Contact/Contact';

const Home = () => {
  return (
    <div className='container mx-auto'>
      <Banner></Banner>
      <Categories></Categories>
      <Contact></Contact>
    </div>
  );
};

export default Home;
