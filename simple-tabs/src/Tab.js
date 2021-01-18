import React from 'react';

const Tab = ({ active, id, company, changeIndexHandler }) => {
  return (
    <button
      className={`btn ${active && 'active'}`}
      onClick={() => changeIndexHandler(id)}
    >
      {company}
    </button>
  );
};

export default Tab;
