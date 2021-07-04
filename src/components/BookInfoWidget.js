import React, { useContext } from "react";
import { GlobalState } from "../GlobalState";
import { Link } from "react-router-dom";

// const bookDetails = {
//   name: "Harry Potter",
//   author: "JK Rowlings",
//   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit aspernatur aperiam. Nostrum libero veniam quidem veritatis autem. Molestias quos totam voluptates quaerat. Sunt quas quasi iste sit maiores natus consequuntur, esse nemo! Eum, accusamus! Expedita labore eius incidunt tenetur.",
//   genre: "Fantasy",
//   pageCount: "30"
// }

function BookInfoWidget() {
  const state = useContext(GlobalState);
  // const [currentBookInfo] = state.booksAPI.currentBookInfo;

  return (
    <div className="border-pink-500 border-4 p-8 rounded-3xl shadow-xl w-full">
      {/* <h1 className="h1 max-w-xl">{currentBookInfo.name || "Click book"}</h1>
      <h2 className="h2">Author</h2>
      <Link to={{ query: { author: currentBookInfo.author } }}>
        More Books by the author
      </Link> */}
    </div>
  );
}

export default BookInfoWidget;
