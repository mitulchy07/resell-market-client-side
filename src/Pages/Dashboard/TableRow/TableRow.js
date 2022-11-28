import React from 'react';
import { Link } from 'react-router-dom';

const TableRow = ({ data, handleVerified, handleDelete }) => {
  const { name, email, verified, _id } = data;

  return (
    <div>
      <div className='md:grid md:grid-cols-5 gap-12 my-2 hidden'>
        <div> {name} </div>
        <div>{email}</div>
        <div className='btn-group'>
          <Link
            onClick={() => {
              handleVerified(_id);
            }}
            className='btn btn-primary'
          >
            {verified === false ? 'Verify' : 'Verified'}
          </Link>
          <Link
            onClick={() => {
              handleDelete(_id);
            }}
            className='btn btn-primary'
          >
            Delete
          </Link>
        </div>
      </div>
      <div className='card w-96 bg-base-100 shadow-xl my-3 md:hidden'>
        <div className='card-body'>
          <h2 className='card-title'>Name: {name} </h2>
          <h2 className='card-title'>Email: {email} </h2>
          <div className='justify-center btn-group'>
            <Link
              onClick={() => {
                handleVerified(_id);
              }}
              className='btn btn-primary'
            >
              {verified === false ? 'Verify' : 'Verified'}
            </Link>
            <Link
              onClick={() => {
                handleDelete(_id);
              }}
              className='btn btn-primary'
            >
              Delete
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableRow;
