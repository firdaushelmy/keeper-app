import React from 'react';
import PropTypes from 'prop-types';

const Note = ({ title, content }) => (
  <div className='note'>
    <h1>{title}</h1>
    <p>{content}</p>
    <button type='button'>Delete</button>
  </div>
);

Note.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Note;
