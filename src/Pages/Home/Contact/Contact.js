import emailjs from '@emailjs/browser';
import React, { useContext, useRef } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import img from '../../../images/cat.jpg';

export const Contact = () => {
  const { user } = useContext(AuthContext);
  const form = useRef();
  const notify = () => toast('Message Sent.');

  const sendEmail = (e) => {
    const data = e.target;
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hu9we12',
        'template_hidbk6w',
        form.current,
        'bnq5kMoL3oqS7myN1'
      )
      .then(
        (result) => {
          console.log(result.text);
          data.reset();
          notify();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 p-4 text-white'>
      <div className='py-4'>
        <h1 className='text-xl '>Contact Me:</h1>
        <img src={img} alt='' className='rounded md:w-96' />
      </div>
      <div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='grid grid-cols-1 gap-2'
        >
          <label>Name</label>
          <input
            className='input btn-ghost btn-outline'
            type='text'
            name='user_name'
            defaultValue={user?.displayName ? user.displayName : ''}
            required
          />
          <label>Email</label>
          <input
            className='input btn-ghost btn-outline'
            type='email'
            name='user_email'
            defaultValue={user?.email ? user.email : ' '}
            required
          />
          <label>Message</label>
          <textarea
            className='textarea btn-ghost btn-outline'
            name='message'
            required
          />
          <input className='btn' type='submit' value='Send' />
        </form>
      </div>
    </div>
  );
};
