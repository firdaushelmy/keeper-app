import React from 'react';
import Note from './Note'

const createNotes = getNotes =>
  (
    <Note
      key={getNotes.key}
      title={getNotes.title}
      content={getNotes.content}
    />
  )

export default createNotes;