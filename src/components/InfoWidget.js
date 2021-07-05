import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../GlobalState";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

function InfoWidget({ currentData }) {
  const state = useContext(GlobalState);
  const [sourceAuthors] = state.authorAPI.sourceAuthors;
  const [currentAuthor, setCurrentAuthor] = useState({});

  useEffect(() => {
    currentData &&
      setCurrentAuthor(
        sourceAuthors.filter((author) => author._id === currentData.authorId)[0]
      );
  }, [currentData, sourceAuthors]);

  return (
    <div className="border-pink-500 border-4 p-8 rounded-3xl shadow-xl w-full">
      <h1 className="h1 max-w-xl">{currentData?.title || "Click book"}</h1>
      <div className="flex justify-between">
        <p>
          By{" "}
          {!currentAuthor?.name ? (
            <>Author</>
          ) : (
            <Link to="" className="underline">
              {currentAuthor?.name || "<Author Name>"}
            </Link>
          )}
        </p>
        {currentAuthor?.name && (
          <div className="flex">
            <button className="mx-2" onClick={() => state.booksAPI.editBook()}>
              <FiEdit2 />
            </button>
            <button
              className="mx-2"
              onClick={() => state.booksAPI.deleteBook(currentData._id)}
            >
              <FiTrash2 />
            </button>
          </div>
        )}
      </div>
      <hr className="my-3" />
      <h4 className="h4 font-bold">Description</h4>
      <p>{currentData?.description}</p>
      <hr className="my-3" />
      <Link
        to={{ query: { author: currentAuthor?.name } }}
        className="font-bold"
      >
        More Books by the author:
      </Link>
    </div>
  );
}

export default InfoWidget;
