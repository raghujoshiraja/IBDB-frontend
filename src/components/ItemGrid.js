import React, { useContext } from "react";
import { GlobalState } from "../GlobalState";
import "../utils/spinner/spinner.css";

const ItemGrid = ({ idVariable, setIdVariable, books }) => {
  // const state = useContext(GlobalState);
  // const setCurrentBook = state.booksAPI.currentBook.slice(-1)[0];

  if (books.length === 0) return <div className="spinner"></div>;
  return (
    <div className="mt-4 col-span-3">
      {/* {books.map((book) => {
        return (
          <div
            className="px-3 py-2 border-pink-500 border-2 inline-block m-2 rounded-xl shadow-md cursor-pointer"
            key={book.id}
            onClick={() => setIdVariable(book.id)}
          >
            {book.name}
          </div>
        );
      })} */}
    </div>
  );
};

export default ItemGrid;
