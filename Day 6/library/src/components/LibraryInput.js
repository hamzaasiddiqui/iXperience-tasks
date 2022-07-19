import React, { useState } from "react";

import { Book } from "../models/book";

export default function LibraryInput(props) {
  const [book, setBook] = useState({ name: "", author: "", isbn: "" });

  const handleChange = (event) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  function onFormSubmit(event) {
    event.preventDefault();

    const newBook = new Book(
      new Date().getTime(),
      book.name,
      book.author,
      book.isbn
    );

    props.onBookCreated(newBook);

    setBook({ name: "", author: "", isbn: "" });
  }

  return (
    <div className="mt-3">
      <form onSubmit={onFormSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            value={book.name}
            onChange={handleChange}
            type="text"
            name="name"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            value={book.author}
            onChange={handleChange}
            type="text"
            name="author"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">#ISBN</label>
          <input
            value={book.isbn}
            onChange={handleChange}
            type="text"
            name="isbn"
            className="form-control"
          />
        </div>

        <div className="d-grid gap-2">
          <button className="btn btn-outline-secondary" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
