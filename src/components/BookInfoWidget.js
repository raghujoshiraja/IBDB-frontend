import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../GlobalState";
import { FiEdit2, FiTrash2, FiX, FiCheck } from "react-icons/fi";

function BookInfoWidget({ currentBookData }) {
  const state = useContext(GlobalState);
  const [sourceAuthors] = state.authorsAPI.sourceAuthors;
  const [sourceBooks] = state.booksAPI.sourceBooks;
  const [currentAuthor, setCurrentAuthor] = useState({});
  const [currentAuthorRestBooks, setCurrentAuthorRestBooks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingData, setEditingData] = useState({});

  useEffect(() => {
    if (currentBookData) {
      setCurrentAuthor(
        sourceAuthors.filter(
          (author) => author._id === currentBookData.authorId
        )[0]
      );
      setCurrentAuthorRestBooks(
        sourceBooks?.filter(
          (book) =>
            book?.authorId === currentBookData?.authorId &&
            currentBookData._id !== book._id
        )
      );
      setEditingData(currentBookData);
    }
  }, [currentBookData, sourceAuthors, sourceBooks]);

  const handleEdit = () => {
    setIsEditing(false);
    console.log("sending", currentBookData._id);
    state.booksAPI.editBook(currentBookData._id, editingData);
  };

  useEffect(() => {
    console.log(isEditing);
  }, [isEditing]);

  return (
    <div className="border-pink-500 border-4 p-8 rounded-3xl shadow-xl w-full">
      <h1 className="h1 max-w-xl">
        {isEditing ? (
          <>
            <input
              type="text"
              value={editingData?.title}
              className="underline-tb font-bold"
              onChange={(e) =>
                setEditingData({ ...editingData, title: e.target.value })
              }
            />
          </>
        ) : (
          currentBookData?.title || `Click a Book`
        )}
      </h1>
      <div className="flex justify-between">
        <p>
          By{" "}
          {!isEditing ? (
            <Link
              to={`/authors/${currentAuthor?._id || ""}`}
              className="underline"
            >
              {currentAuthor?.name || "<Author Name>"}
            </Link>
          ) : (
            <select
              key="text"
              className="underline-tb"
              value={editingData?.authorId}
              onChange={(e) =>
                setEditingData({ ...editingData, authorId: e.target.value })
              }
            >
              {sourceAuthors.length > 0 &&
                sourceAuthors.map((author) => (
                  <option key={author._id} value={author._id}>
                    {author.name}
                  </option>
                ))}
            </select>
          )}
        </p>
        {currentAuthor?.name && (
          <div className="flex">
            {/* Action Buttons */}
            {isEditing ? (
              <>
                <button
                  className="mx-2"
                  onClick={() => {
                    setIsEditing(false);
                    setEditingData(currentBookData);
                  }}
                >
                  <FiX />
                </button>
                <button className="mx-2" onClick={handleEdit}>
                  <FiCheck />
                </button>
              </>
            ) : (
              <>
                <button className="mx-2" onClick={() => setIsEditing(true)}>
                  <FiEdit2 />
                </button>
                <button
                  className="mx-2"
                  onClick={() => state.booksAPI.deleteBook(currentBookData._id)}
                >
                  <FiTrash2 />
                </button>
              </>
            )}
          </div>
        )}
      </div>
      <hr className="my-3" />
      {currentBookData?.description ? (
        <>
          <h4 className="h4 font-bold">Description</h4>
          {isEditing ? (
            <textarea
              className="underline-tb"
              rows="10"
              value={editingData?.description}
              onChange={(e) =>
                setEditingData({ ...editingData, description: e.target.value })
              }
            ></textarea>
          ) : (
            <p>{currentBookData?.description}</p>
          )}
        </>
      ) : (
        <p>Click a book to view its details</p>
      )}
      <section>
        <>
          {currentAuthorRestBooks.length > 0 && !isEditing && (
            <>
              <hr className="my-3" />
              <Link
                to={{ query: { author: currentAuthor?.name } }}
                className="font-bold"
              >
                More Books by the author:
              </Link>
              <ul>
                {currentAuthorRestBooks?.map((book) => (
                  <li className="list-disc ml-4 pl-2 underline" key={book._id}>
                    <Link to={`/books/${book._id}`}>{book.title}</Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      </section>
    </div>
  );
}

export default BookInfoWidget;
