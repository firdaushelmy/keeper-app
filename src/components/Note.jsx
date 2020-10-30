import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';

const Note = ({ onChecked, id, title, content }) => {
  function handleClick() {
    onChecked(id);
  }

  return (
    <header>
      <div className='note'>
        <h1>{title}</h1>
        <p>{content}</p>
        <button type='button' onKeyDown={handleClick} onClick={handleClick}>
          <DeleteIcon />
        </button>
      </div>
    </header>
  );
};

Note.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onChecked: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Note;
