import React from "react";

export default function LibraryTable(props) {
  function onBookRemove(book) {
    props.onBookRemove(book);
  }

  return (
    <div className="mt-5">
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>#ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.books.map((book) => (
            <tr key={book.id}>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.isbn}</td>
              <td>
                <button
                  onClick={(e) => onBookRemove(book)}
                  className="btn btn-oultine btn-sm ms-3"
                >
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
