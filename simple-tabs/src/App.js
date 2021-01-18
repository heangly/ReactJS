import React, { useState, useEffect } from 'react';
import Tab from './Tab';
import TabInfo from './TabInfo';
import './App.css';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [data, setData] = useState([]);
  const [selectedCompany, setSelectedComapny] = useState({});

  useEffect(() => {
    const fetchingData = async () => {
      const rawData = await fetch(url);
      const dataJson = await rawData.json();
      setData(dataJson);
      setSelectedComapny(dataJson[0]);
    };

    fetchingData();
  }, []);

  const changeIndexHandler = (id) => {
    if (data) {
      const company = data.filter((d) => d.id === id);
      setSelectedComapny(...company);
    }
  };

  return (
    <div className='container'>
      {!data.length ? (
        <h1 className='main-title'>Loading...</h1>
      ) : (
        <>
          <h1 className='main-title'>Experience</h1>
          <div className='line'></div>

          <div className='tab-container'>
            <div className='tab-name'>
              {data.map((d) => (
                <Tab
                  active={d.id === selectedCompany.id}
                  key={d.id}
                  {...d}
                  changeIndexHandler={changeIndexHandler}
                />
              ))}
            </div>
            <div className='tab-info'>
              {selectedCompany.id && <TabInfo {...selectedCompany} />}
            </div>
          </div>
          <button className='btn-info'>More Info</button>
        </>
      )}
    </div>
  );
};

export default App;
