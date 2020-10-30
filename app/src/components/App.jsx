import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ItemInput from './ItemInput';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
const express = require('express');
const http = require('http');
const path = require('path');
let app = express();
app.use(express.static(path.join(__dirname, 'build')));
const port = process.env.PORT || '8080';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));

function App() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    if (newItem !== '') {
      setItems((prevItems) => {
        return [...prevItems, newItem];
      });
    }
  };

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

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
