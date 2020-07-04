import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const byClassByFacultyClasses = "btn btn-link";

  useEffect(() =>
    // Function
    {
        fetch('https://d8h5trh1tb.execute-api.us-east-2.amazonaws.com/dev/semester/semester:Fall%202020')
          .then(
            response => response.json()
          ).then(
            data => console.log(data[0].data)
          );
    }
    // Dependency array. Empty means do it once ! ! !
    , []
  );

  return (
    <div className='container'>
      <h3
        className='text-secondary'
      >
        Madison College IT Classes
      </h3>
      <h1
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
