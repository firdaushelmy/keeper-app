import React, { useState } from 'react';

function ItemInput() {
  const [titleInputText, setTitleInputText] = useState('');
  const [noteInputText, setNoteInputText] = useState('');

  function TitleHandleChange(event) {
    const newValue = event.target.value;
    setTitleInputText(newValue);
  }
  function NoteHandleChange(event) {
    const newValue = event.target.value;
    setNoteInputText(newValue);
  }

  return (
    <div>
      <form>
        <input
          name='title'
          placeholder='Add a title'
          type='text'
          onChange={TitleHandleChange}
          value={titleInputText}
        />
        <textarea
          name='content'
          placeholder='Fill up Note'
          rows='3'
          type='text'
          onChange={NoteHandleChange}
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
