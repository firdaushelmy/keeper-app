import React, { useState } from 'react';

function ItemInput() {
  const [titleInputText, setTitleInputText] = useState('');
  const [noteInputText, setNoteInputText] = useState('');

  function handleChange(event) {
    const newValue = event.target.value;
    if (event.target.name === 'title') {
      setTitleInputText(newValue);
    }
    if (event.target.name === 'content') {
      setNoteInputText(newValue);
    }
  }

  return (
    <div>
      <form>
        <input
          name='title'
          placeholder='Add a title'
          type='text'
          onChange={handleChange}
          value={titleInputText}
        />
        <textarea
          name='content'
          placeholder='Fill up Note'
          rows='3'
          type='text'
          onChange={handleChange}
          value={noteInputText}
        />
        <button type='submit'>
          <span>add</span>
        </button>
      </form>
    </div>
  );
}

export default ItemInput;
