import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState('');
  return (
    <form
      className='grid grid-cols-1 gap-2 max-w-lg m-4'
      onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
    >
      <input
        className='input btn-success btn-outline'
        {...register('email', { required: 'Email address is requierd' })}
        placeholder='Email'
        type='email'
      />
      {errors.email && (
        <p className='text-red-600'> {errors.email?.message} </p>
      )}
      <input
        className='input btn-success btn-outline'
        {...register('password', { required: 'Password is required' })}
        placeholder='Password'
        type='password'
      />
      {errors.password && (
        <p className='text-red-600'> {errors.password?.message} </p>
      )}
      <p>{data}</p>

      <Link to='/register'>Need an account?</Link>
      <input className='input btn-success btn-outline' type='submit' />
    </form>
  );
};

export default Login;
