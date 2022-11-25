import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const notify = () => toast('Message Sent.');
  const [signUpError, setSignUpError] = useState('');
  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // const userInfo = {
        //   displayName: data.name,
        // };

        updateUser(data.name);
        notify();
      })
      .catch((err) => {
        console.error(err);
        setSignUpError(err.message);
      });
  };
  return (
    <form
      className='grid grid-cols-1 gap-2 max-w-lg m-4'
      onSubmit={handleSubmit(handleSignUp)}
    >
      <input
        className='input btn-success btn-outline'
        type='name'
        {...register('name', { required: 'Name is requierd' })}
        placeholder='Full Name'
      />
      {errors.name && <p className='text-red-600'> {errors.name?.message} </p>}
      <input
        className='input btn-success btn-outline'
        {...register('email', { required: 'Email address is requierd' })}
        type='email'
        placeholder='Email'
      />
      {errors.email && (
        <p className='text-red-600'> {errors.email?.message} </p>
      )}

      <input
        className='input btn-success btn-outline'
        {...register('password', {
          required: 'Password is requierd',
          minLength: {
            value: 6,
            message: 'Password should be minimum 6 characters.',
          },
        })}
        type='password'
        placeholder='Password'
      />
      {errors.password && (
        <p className='text-red-600'> {errors.password?.message} </p>
      )}
      <div className=' m-5'>
        <input
          {...register('status', { required: true })}
          type='radio'
          value='Buyer'
          className='radio radio-secondary'
          checked
        />
        <span className='mx-5'>Buyer</span>
        <input
          {...register('status', { required: true })}
          type='radio'
          value='Seller'
          className='radio radio-secondary'
        />
        <span className='mx-5'>Seller</span>
      </div>
      <Link to='/login'>Already have an account?</Link>
      <input className='input btn-success btn-outline' type='submit' />
      <p className='text-red-500'>{signUpError}</p>
    </form>
  );
};

export default Register;
