import React from 'react';
import PropTypes from 'prop-types';

const Note = ({ onChecked, id, title, content }) => (
  <div className='note'>
    <h1>{title}</h1>
    <p>{content}</p>
    <button
      type='button'
      onKeyDown={() => {
        onChecked(id);
      }}
      onClick={() => {
        onChecked(id);
      }}
    >
      Delete
    </button>
  </div>
);

Note.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onChecked: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Note;
