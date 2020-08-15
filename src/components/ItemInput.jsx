import React, { useState } from 'react';

function ItemInput() {
  const [inputText, setInputText] = useState('');

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div>
      <form>
        <input
          name='title'
          placeholder='Title'
          type='text'
          onChange={handleChange}
          value={inputText}
        />
        <textarea
          name='content'
          placeholder='fill up note'
          rows='3'
          type='text'
          onChange={handleChange}
          value={inputText}
        />
        <button type='submit'>
          <span>add</span>
        </button>
      </form>
    </div>
  );
}

export default ItemInput;
