import React, { useState } from 'react';
import ItemInput from './ItemInput';
import Header from './Header';
import Footer from './Footer';
import notes from './notes';
import createNotes from './createNotes';

function App() {
  const [items, setItems] = useState({});

  function addItem({ titleInputText, noteInputText }) {
    if (titleInputText !== '') {
      setItems((prevItems) => {
        return [...prevItems, titleInputText];
      });
    }
    if (noteInputText !== '') {
      setItems((prevItems) => {
        return [...prevItems, noteInputText];
      });
    }
  }

  return (
    <div>
      <Header />
      <ItemInput addItem={addItem} />
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}

export default App;
