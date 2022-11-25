import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login, handleGoogleSignIn, loading } = useContext(AuthContext);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from.pathname || '';
  const notify = () => toast('Login Successful!');
  const handleLogin = (data) => {
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        notify();
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };

  return (
    <div className='grid grid-cols-1 gap-2 max-w-lg m-4'>
      {loading ? <progress className='progress w-56 m-5'></progress> : ''}
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
        <p className='text-red-500'>{error}</p>
      </form>
      <div className='divider'>OR</div>
      <Link className='btn btn-outline mx-5' onClick={handleGoogleSignIn}>
        Sign in with Google
      </Link>
    </div>
  );
};

export default Login;
