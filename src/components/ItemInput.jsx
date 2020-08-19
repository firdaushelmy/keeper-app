import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ItemInput({ addItem }) {
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
        <button
          type='submit'
          onClick={() => {
            addItem({ title: titleInputText, note: noteInputText });
            setTitleInputText('');
            setNoteInputText('');
          }}
        >
          <span>add</span>
        </button>
      </form>
    </div>
  );
}

ItemInput.propTypes = {
  addItem: PropTypes.string.isRequired,
};

export default ItemInput;
