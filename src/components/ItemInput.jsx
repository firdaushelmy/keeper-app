import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';

const ItemInput = ({ addItem }) => {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (event) => {
    addItem(note);
    setNote({ title: '', content: '' });
    event.preventDefault();
  };

  const expand = () => {
    setExpanded(true);
  };

  return (
    <div>
      <form className='create-note'>
        {isExpanded ? (
          <input
            name='title'
            placeholder='Add a title'
            type='text'
            onChange={handleChange}
            value={note.title}
          />
        ) : null}
        <textarea
          name='content'
          placeholder='Fill up Note'
          onClick={expand}
          rows={isExpanded ? 3 : 1}
          type='text'
          onChange={handleChange}
          value={note.content}
        />
        <Zoom in={isExpanded}>
          <Fab type='submit' onClick={submitNote}>
            <span>
              <AddIcon />
            </span>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

ItemInput.propTypes = {
  addItem: PropTypes.string.isRequired,
};

export default ItemInput;
