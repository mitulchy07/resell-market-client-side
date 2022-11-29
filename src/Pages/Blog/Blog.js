import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className='justify-center grid  my-5 gap-5'>
      <div className='card w-full bg-primary text-primary-content'>
        <div className='card-body'>
          <h2 className='card-title'>
            {' '}
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p>
            <ul>
              <h1>
                There are four main types of state you need to properly manage
                in your React apps:
              </h1>
              <li>Local state</li>
              <li>Global state</li>
              <li>Server state</li>
              <li>URL state</li>
            </ul>
          </p>
        </div>
      </div>
      <div className='card w-full bg-primary text-primary-content'>
        <div className='card-body'>
          <h2 className='card-title'>
            How does prototypical inheritance work?
          </h2>
          <p>
            The Prototypal Inheritance is a feature in javascript used to add
            methods and properties in objects. It is a method by which an object
            can inherit the properties and methods of another object. <br />
            Traditionally, in order to get and set the Prototype of an object,
            we use Object. getPrototypeOf and Object.
          </p>
        </div>
      </div>
      <div className='card w-full bg-primary text-primary-content'>
        <div className='card-body'>
          <h2 className='card-title'>
            What is a unit test? Why should we write unit tests?
          </h2>
          <p>
            The main objective of unit testing is to isolate written code to
            test and determine if it works as intended. Unit testing is an
            important step in the development process, because if done
            correctly, <br /> it can help detect early flaws in code which may
            be more difficult to find in later testing stages.
          </p>
        </div>
      </div>
      <div className='card w-full bg-primary text-primary-content'>
        <div className='card-body'>
          <h2 className='card-title'>React vs. Angular vs. Vue?</h2>
          <p>
            Vue provides higher customizability and hence is easier to learn
            than Angular or React. Further, Vue has an overlap with Angular and
            React with respect to their functionality like the use of
            components. <br /> Hence, the transition to Vue from either of the
            two is an easy option.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
