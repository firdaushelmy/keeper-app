import React from 'react';
import ItemInput from './ItemInput';
import Header from './Header';
import Footer from './Footer';
import notes from './notes';
import createNotes from './createNotes';

function App() {
  return (
    <div>
      <Header />
      <ItemInput />
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}

export default App;
