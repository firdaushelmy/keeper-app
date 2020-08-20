import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ItemInput({ addItem }) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    addItem(note);
    setNote({ title: '', content: '' });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name='title'
          placeholder='Add a title'
          type='text'
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name='content'
          placeholder='Fill up Note'
          rows='3'
          type='text'
          onChange={handleChange}
          value={note.content}
        />
        <button type='submit' onClick={submitNote}>
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
