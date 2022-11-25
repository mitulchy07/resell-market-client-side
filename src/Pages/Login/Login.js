import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useContext(AuthContext);
  const handleLogin = (data) => {
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className='grid grid-cols-1 gap-2 max-w-lg m-4'>
      <form
        className='grid grid-cols-1 gap-2 max-w-lg m-4'
        onSubmit={handleSubmit(handleLogin)}
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

        <Link to='/register'>Need an account?</Link>
        <input className='input btn-success btn-outline' type='submit' />
      </form>
      <div className='divider'>OR</div>
      <Link className='btn btn-outline mx-5'>Sign in with Google</Link>
    </div>
  );
};

export default Login;
