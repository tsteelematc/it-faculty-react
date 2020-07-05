import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [byClassData, setByClassData] = useState([]);
  const [byFacultyData, setByFacultyData] = useState([]);

  useEffect(() =>
    // Function
    {
        fetch('https://d8h5trh1tb.execute-api.us-east-2.amazonaws.com/dev/semester/semester:Fall%202020')
          .then(
            response => response.json()
          ).then(
            data => {

              setByClassData([
                ...data[0].data
                  .sort((a, b) => a.class == b.class ? 0 : a.class < b.class ? -1 : 1)
                  .map(x => ({
                    ...x
                    , faculty: [
                        ...new Set(
                          [...x.faculty]
                            .sort()
                            .map((y, i, arr) => `${y} ${arr.filter(z => z === y).length > 1 ? '(' + arr.filter(z => z === y).length + ' sections)' : ''}`)
                        )
                      ]
                  }))
              ]);

              const groupedByFaculty = data[0].data
                .reduce(
                  (acc, x) => {
                    x.faculty.forEach(y => {
                      const classesForExistingFaculty = acc.get(y);

                      classesForExistingFaculty 
                        ? acc.set(y, [...classesForExistingFaculty, x.class]) 
                        : acc.set(y, [x.class])
                    })

                    return acc;
                  }
                  , new Map()
                );
                
              const arrayOfObjectsFromMap = [...groupedByFaculty]
                .map(x => ({
                    faculty: x[0]
                    , classes: [
                      ...new Set(
                        x[1]
                          .sort()
                          .map((y, i, arr) => `${y} ${arr.filter(z => z === y).length > 1 ? '(' + arr.filter(z => z === y).length + ' sections)' : ''}`)
                      )
                    ]
                  })
                )
                .sort((a, b) => a.faculty == b.faculty ? 0 : a.faculty < b.faculty ? -1 : 1)
              ;
              
              //console.log(arrayOfObjectsFromMap);
              setByFacultyData(arrayOfObjectsFromMap);
            }
          );
    }
    // Dependency array. Empty means do it once ! ! !
    , []
  );

  let [byClass, setByClass] = useState(true);
  const toggleByClass = () => setByClass(byClass = !byClass);

  return (
    <>
      <div
        className='jumbotron'
      >
          <h5
            className='text-secondary'
          >
            Madison College IT Classes
          </h5>
          <h2
            className='text-primary'
          >
            <button
              className='btn btn-outline-primary mr-3 disabled'
            >
              &lt;
            </button>
              Fall 2020
            <button
              className='btn btn-outline-primary ml-3 disabled'
            >
              &gt;
            </button>
          </h2>    
      </div>
      <div
        className='container'
      >
        <div
          className='btn-group mb-3'
        >
          <button
            className={byClass ? 'btn btn-secondary' : 'btn btn-outline-secondary'}
            onClick={toggleByClass}
          >
            By Class ({byClassData.length})
          </button>
          <button
            className={byClass ? 'btn btn-outline-secondary' : 'btn btn-secondary'}
            onClick={toggleByClass}
          >
            By Faculty ({byFacultyData.length})
          </button>
        </div>

        { 
          byClass
            ? byClassData.map(x => (
                <div
                  className='card mb-3'
                >
                  <h5
                    className='card-header'
                  >
                    { x.class }
                  </h5>
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
            : byFacultyData.map(x => (
              <div
                className='card mb-3'
              >
                <h5
                  className='card-header'
                >
                  { x.faculty }
                </h5>
                <div
                  className='card-body'
                >
                  {
                    x.classes.map(y => (
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
    </>
  );
}

export default App;
