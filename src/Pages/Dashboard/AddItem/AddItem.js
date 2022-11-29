import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const AddItem = () => {
  const { user } = useContext(AuthContext);
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const curr = new Date();
  curr.setDate(curr.getDate());
  const date = curr.toISOString().substring(0, 10);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleSubmitItem = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        const carData = {
          email: data.email,
          model: data.model,
          price: data.price,
          phone: data.phone,
          location: data.location,
          description: data.description,
          category: data.category,
          boughtdate: data.boughtdate,
          condition: data.condition,
          image: imgData.data.url,
          postdate: data.posteddate,
          sellername: data.sellername,
          verified: false,
          reported: false,
          booked: false,
          sold: false,
          advertise: false,
        };
        fetch('https://server-side-virid.vercel.app/sell', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(carData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              console.log('data added');
            }
            toast('Item added for sell');
            reset();
            navigate(`/myitems/${user?.email}`);
          })
          .catch((err) => console.error(err));

        console.log(carData);
      });
  };
  return (
    <form
      className='grid grid-cols-1 gap-2 max-w-lg m-4'
      onSubmit={handleSubmit(handleSubmitItem)}
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
        type='text'
        {...register('sellername', { required: 'Name is requierd' })}
        placeholder='What is your name?'
        defaultValue={user?.displayName}
        hidden
      />
      {errors.sellername && (
        <p className='text-red-600'> {errors.sellername?.message} </p>
      )}
      <input
        className='input btn-success btn-outline'
        {...register('email', { required: 'Email address is requierd' })}
        type='email'
        defaultValue={user?.email}
        hidden
      />
      {errors.email && (
        <p className='text-red-600'> {errors.email?.message} </p>
      )}
      <span>What is the preferable price you want to sell?</span>

      <input
        className='input btn-success btn-outline'
        {...register('price', {
          required: 'Please enter an amount',
        })}
        type='number'
        placeholder='Price'
      />
      {errors.price && (
        <p className='text-red-600'> {errors.price?.message} </p>
      )}
      <span>Add you phone number:</span>
      <input
        className='input btn-success btn-outline'
        {...register('phone', {
          required: 'Please enter your phone number',
        })}
        type='number'
        placeholder='Phone Number'
      />
      {errors.phone && (
        <p className='text-red-600'> {errors.phone?.message} </p>
      )}
      <span>Where do you live?</span>
      <input
        className='input btn-success btn-outline'
        {...register('location', {
          required: 'Where do you live?',
        })}
        type='text'
        placeholder='Dhaka, Chittagong, etc.'
      />
      {errors.location && (
        <p className='text-red-600'> {errors.location?.message} </p>
      )}
      <span>Write something about the car:</span>
      <input
        className='input btn-success btn-outline'
        type='textarea'
        {...register('description', { required: 'Write something' })}
        placeholder='Add description to that get better boost.'
      />
      {errors.description && (
        <p className='text-red-600'> {errors.description?.message} </p>
      )}
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
      {errors.category && (
        <p className='text-red-600'> {errors.category?.message} </p>
      )}
      <span>When did you buy this?</span>
      <input
        className='input btn-success btn-outline'
        {...register('boughtdate', {
          required: 'When did you buy this?',
        })}
        type='date'
        defaultValue={date}
      />
      {errors.boughtdate && (
        <p className='text-red-600'> {errors.boughtdate?.message} </p>
      )}
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
      <span>Upload image: </span>
      <input
        className='input btn-success btn-outline'
        {...register('image', {
          required: 'Upload your car picture.',
        })}
        type='file'
      />
      {errors.image && (
        <p className='text-red-600'> {errors.image?.message} </p>
      )}
      <input type='submit' className='input btn-success btn-outline' />
    </form>
  );
};

export default AddItem;
