import React, { useState } from 'react';

const InputBox = ({ generateParagraph }) => {
  const [num, setNum] = useState(0);
  return (
    <div className='input-box-container'>
      <h3>Paragraphs: </h3>
      <input
        type='number'
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <button className='btn' onClick={() => generateParagraph(num)}>
        Generate
      </button>
    </div>
  );
};

export default InputBox;
