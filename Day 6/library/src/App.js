import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import LibraryInput from './components/LibraryInput';
import LibraryTable from './components/LibraryTable';

import bookService from './services/book.service'

export default function App() {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    try {
      const books = await bookService.readBooks();
      setbooks(books);
    } catch(err) {
      console.log(err);
    }
  }

  async function onBookCreated(book) {
    try {
      book = await bookService.createBook(book);

      const newBooks = [...books, book];
      setbooks(newBooks);

    } catch(err) {
      console.log(err);
    }
  }

  async function onBookRemove(book) {
    try {
      await bookService.deleteBook(book);

      const newBook = books.filter((b) => {
        return b.id !== book.id;
      })
      setbooks(newBook);
    } catch(err) {
      console.log(err);
    }
   }

  return (
    <div className='container mt-4'>
      <h1>Add Book:</h1>

      <LibraryInput onBookCreated={onBookCreated}/>

      <LibraryTable books={books} onBookRemove={onBookRemove}/>
    </div>
  )
}
