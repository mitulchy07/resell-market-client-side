import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className='navbar bg-base-100'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <Link>Item 1</Link>
              </li>

              <li>
                <Link>Item 3</Link>
              </li>
            </ul>
          </div>
          <Link className='btn btn-ghost normal-case text-xl'>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmsXC9m1hhVaaM7Xtd4uh5q9HJfp5H78qiH48tojh-M4-PDDLhugctBIcn52MFQNSbY0Q&usqp=CAU'
              width='50'
              height='50'
              className='d-none d-lg-block align-top rounded-circle text-white mx-1'
              alt=''
            />
            <span>
              <span className='text-success'>CAR</span>RESELL
            </span>
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal p-0'>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <Link to='/faq'>FAQ</Link>
            </li>
          </ul>
        </div>
        <div className='navbar-end'>
          <Link className='btn btn-success'>Get started</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
