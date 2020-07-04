import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const byClassByFacultyClasses = "btn";

  const [data, setData] = useState([]);

  useEffect(() =>
    // Function
    {
        fetch('https://d8h5trh1tb.execute-api.us-east-2.amazonaws.com/dev/semester/semester:Fall%202020')
          .then(
            response => response.json()
          ).then(
            data => setData(data[0].data)
          );
    }
    // Dependency array. Empty means do it once ! ! !
    , []
  );

  return (
    <div className='container'>
      <h5
        className='text-secondary mb-3'
      >
        Madison College IT Classes
      </h5>
      <h2
          className='text-primary'
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
        </h2>      
      <div
        className='btn-group mt-3 mb-5'
      >
        <button
          className={byClassByFacultyClasses + ' btn-secondary'}
          
        >
          By Class ({data.length})
        </button>
        <button
          className={byClassByFacultyClasses + ' btn-outline-secondary'}
        >
          By Faculty
        </button>
      </div>

      { 
        data.map(x => (
            <div
              className='card mb-3'
            >
              <div
                className='card-header'
              >
                { x.class }
              </div>
              <div
                className='card-body'
              >
                {
                  x.faculty.map(y => (
                      <p>{y}</p>
                    )
                  )
                }
              </div>
            </div>
          )
        )
      }
    </div>
  );
}

export default App;
