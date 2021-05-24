import React, { useContext } from "react";
import { GlobalState } from "../GlobalState";
import '../utils/spinner/spinner.css'

function BookWidgetGrid() {
  const state = useContext(GlobalState);
  const { books } = state.BookAPI;
  const setCurrentBook = state.BookAPI.currentBook.slice(-1)[0];

  if (books.length === 0) return <div className="spinner"></div>
  return (
    <div className="mt-4">
      {books.map((book) => {
        return (
          <div
            className="px-3 py-2 border-pink-500 border-2 inline-block m-2 rounded-xl shadow-md cursor-pointer"
            key={book.id}
            onClick={() => setCurrentBook(book.id)}
          >
            {book.name}
          </div>
        );
      })}
    </div>
  );
}

export default BookWidgetGrid;
