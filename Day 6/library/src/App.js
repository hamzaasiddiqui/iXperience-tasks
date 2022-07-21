import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import LibraryInput from './components/LibraryInput';
import LibraryTable from './components/LibraryTable';

export default function App() {
  const [books, setbooks] = useState([]);

  function onBookCreated(book) {
    setbooks([...books, book]);
  }

  function onBookRemove(book) {
    const newBook = books.filter((b) => {
      return b.id !== book.id;
    })
    setbooks(newBook);
  }

  return (
    <div className='container mt-4'>
      <h1>Add Book:</h1>

      <LibraryInput onBookCreated={onBookCreated}/>

      <LibraryTable books={books} onBookRemove={onBookRemove}/>
    </div>
  )
}
