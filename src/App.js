import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const byClassByFacultyClasses = "btn btn-link";

  return (
    <div class='container'>
      <h1 
        className='text-secondary'
      >
        Madison College IT Classes
        <small
          className='text-primary ml-3'
        >
          <button
            className='btn btn-outline-primary mr-3'
          >
            &lt;
          </button>
            Fall 2020
          <button
            className='btn btn-outline-primary ml-3'
          >
            &gt;
          </button>
        </small>
      </h1>
      <div
        className='mb-5'
      >
        <button
          className={byClassByFacultyClasses + ' text-danger'}
          
        >
          By Class
        </button>
        <button
          className='btn btn-link'
        >
          By Faculty
        </button>
      </div>
      <div
        className='card'
      >
        <div
          className='card-header'
        >
          Advanced Cloud for Developers
        </div>
        <div
          className='card-body'
        >
          <p>
            Tom Steele
          </p>
          <p>
            Somebody Else
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
