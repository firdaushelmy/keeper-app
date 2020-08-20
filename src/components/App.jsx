import React, { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import ItemInput from './ItemInput';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';

function App() {
  const [items, setItems] = useState([]);

  function addItem(newItem) {
    if (newItem !== '') {
      setItems((prevItems) => {
        return [...prevItems, newItem];
      });
    }
  }

  return (
    <div>
      <Header />
      <ItemInput addItem={addItem} />
      {items.map((noteItem) => (
        <Note title={noteItem.title} content={noteItem.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
