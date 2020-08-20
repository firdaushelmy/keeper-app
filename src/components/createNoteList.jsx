import React from 'react';
import NoteList from './NoteList';

const createNoteList = (getNotes) => (
  <NoteList
    key={getNotes.key}
    title={getNotes.title}
    content={getNotes.content}
  />
);

export default createNoteList;
