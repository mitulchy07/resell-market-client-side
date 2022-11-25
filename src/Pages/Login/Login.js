import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Link to='/register' className='btn m-4'>
        Register Here.
      </Link>
    </div>
  );
};

export default Login;
