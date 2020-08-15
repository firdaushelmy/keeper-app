import React, { useState } from 'react';

function ItemInput() {
  const [inputText, setInputText] = useState('');

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className='form'>
      <input type='text' onChange={handleChange} value={inputText} />
      <button type='submit'>
        <span>add</span>
      </button>
    </div>
  );
}

export default ItemInput;
