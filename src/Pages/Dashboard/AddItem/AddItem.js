import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const AddItem = () => {
  const { user } = useContext(AuthContext);
  const curr = new Date();
  curr.setDate(curr.getDate());
  const date = curr.toISOString().substring(0, 10);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  return (
    <div>
      <div>
        <h1>What do you want to sell? Fill the details here:</h1>
      </div>
      <div>
        <form
          className='grid grid-cols-1 gap-2 max-w-lg m-4'
          onSubmit={handleSubmit()}
        >
          <span>What is the model your car?</span>
          <input
            className='input btn-success btn-outline'
            type='text'
            {...register('model', { required: 'Name is requierd' })}
            placeholder='Car Model'
          />

          <input
            className='input btn-success btn-outline'
            {...register('email', { required: 'Email address is requierd' })}
            type='email'
            defaultValue={user?.email}
            hidden
            disabled
          />
          <span>What is the preferable price you want to sell?</span>

          <input
            className='input btn-success btn-outline'
            {...register('price', {
              required: 'Please enter an amount',
            })}
            type='number'
            placeholder='Price'
          />
          <span>Add you phone number:</span>
          <input
            className='input btn-success btn-outline'
            {...register('phone', {
              required: 'Please enter your phone number',
            })}
            type='number'
            placeholder='Phone Number'
          />
          <span>Where do you live?</span>
          <input
            className='input btn-success btn-outline'
            {...register('location', {
              required: 'Where do you live?',
            })}
            type='number'
            placeholder='Dhaka, Chittagong, etc.'
          />
          <span>Write something about the car:</span>

          <input
            className='input btn-success btn-outline'
            type='textarea'
            {...register('description', { required: 'Write something' })}
            placeholder='Add description to that get better boost.'
          />
          <span>Which brand is your car?</span>
          <select
            {...register('category')}
            className='input btn-success btn-outline'
            defaultValue='bmw'
          >
            <option value='bmw'>BMW</option>
            <option value='renault'>Renault</option>
            <option value='peugeot'>Peugeot</option>
            <option value='audi'>Audi</option>
            <option value='marcedes'>marcedes</option>
            <option value='opel'>Opel</option>
          </select>
          <span>When did you buy this?</span>
          <input
            className='input btn-success btn-outline'
            {...register('boughtdate', {
              required: 'When did you buy this?',
            })}
            type='date'
            defaultValue={date}
          />
          <input
            {...register('posteddate')}
            type='date'
            defaultValue={date}
            hidden
          />
          <span>What is the condition of the car?</span>
          <div className=' m-5'>
            <input
              {...register('condition', { required: true })}
              type='radio'
              value='Excelent'
              className='radio radio-secondary'
              checked
            />
            <span className='mx-5'>Excelent</span>
            <input
              {...register('condition', { required: true })}
              type='radio'
              value='Good'
              className='radio radio-secondary'
            />
            <span className='mx-5'>Good</span>
            <input
              {...register('condition', { required: true })}
              type='radio'
              value='Fair'
              className='radio radio-secondary'
            />
            <span className='mx-5'>Fair</span>
          </div>

          <input className='input btn-success btn-outline' type='submit' />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
