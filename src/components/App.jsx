import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <ItemInput addItem={addItem} />
      {items.map((noteItem, index) => (
        <Note
          key={uuidv4}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onChecked={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
