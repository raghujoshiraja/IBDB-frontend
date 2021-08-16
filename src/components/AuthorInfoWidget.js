import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../GlobalState";
import { FiEdit2, FiTrash2, FiX, FiCheck } from "react-icons/fi";

function InfoWidget({ currentAuthorData }) {
  const state = useContext(GlobalState);
  const [sourceAuthors] = state.authorsAPI.sourceAuthors;
  const [sourceBooks] = state.booksAPI.sourceBooks;
  // const [currentAuthor, setCurrentAuthor] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editingData, setEditingData] = useState({});
  const [currentAuthorRestBooks, setCurrentAuthorRestBooks] = useState([]);

  useEffect(() => {
    if (currentAuthorData?.name) {
      // const currAuthor = sourceAuthors.filter(
      //   (author) => author._id === currentAuthorData._id
      // )[0];
      // setCurrentAuthor(currAuthor);
      setCurrentAuthorRestBooks(
        sourceBooks?.filter((book) => book?.authorId === currentAuthorData?._id)
      );
      setEditingData(currentAuthorData);
    }
  }, [currentAuthorData, sourceAuthors, sourceBooks]);

  const handleEdit = () => {
    setIsEditing(false);
    console.log("sending", currentAuthorData._id);
    state.authorsAPI.editAuthor(currentAuthorData._id, editingData);
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
              value={editingData?.name}
              className="underline-tb font-bold"
              onChange={(e) =>
                setEditingData({ ...editingData, name: e.target.value })
              }
            />
          </>
        ) : (
          currentAuthorData?.name || `Click Author Name`
        )}
      </h1>
      <div className="flex justify-between">
        <p>
          <p>
            {isEditing ? (
              <>
                <input
                  type="number"
                  value={editingData?.age}
                  className="underline-tb font-bold"
                  onChange={(e) =>
                    setEditingData({ ...editingData, age: e.target.value })
                  }
                />
              </>
            ) : (
              currentAuthorData?.age || "<Age>"
            )}{" "}
            Years old |{" "}
            {!isEditing ? (
              { true: "Female", false: "Male", undefined: "<Gender>" }[
                currentAuthorData?.isFemale
              ]
            ) : (
              <select
                value={editingData?.isFemale}
                onChange={(e) =>
                  setEditingData({ ...editingData, isFemale: e.target.value })
                }
              >
                <option value="true">Female</option>
                <option value="false">Male</option>
              </select>
            )}
          </p>
        </p>
        {currentAuthorData?.name &&
          (isEditing ? (
            <>
              <button
                className="mx-2"
                onClick={() => {
                  setIsEditing(false);
                  setEditingData(currentAuthorData);
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
                onClick={() =>
                  state.authorsAPI.deleteAuthor(currentAuthorData._id)
                }
              >
                <FiTrash2 />
              </button>
            </>
          ))}
      </div>
      {currentAuthorRestBooks?.length > 0 ? (
        <>
          <hr className="my-3" />
          <h4 className="h4 font-bold">Authored:</h4>
          <ul>
            {currentAuthorRestBooks?.map((book) => (
              <li className="list-disc ml-4 pl-2 underline" key={book._id}>
                <Link to={`/books/${book._id}`}>{book.title}</Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <hr className="my-3" />
          <h4 className="h4 font-bold">No book added yet...</h4>
        </>
      )}
    </div>
  );
}

export default InfoWidget;
