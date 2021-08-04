import React, { useState, useContext, useEffect } from "react";
import { GlobalState } from "../GlobalState";
import _ from "lodash";
import { FiX } from "react-icons/fi";
import Search from "../components/Search";
import InfoWidget from "../components/InfoWidget";
import ItemGrid from "../components/ItemGrid";

const initialNewAuthorValues = {
  name: "",
  age: "",
  isFemale: "true",
};

const Authors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const state = useContext(GlobalState);
  const [sourceAuthors] = state.authorsAPI.sourceAuthors; // Untouched raw Authors from source
  const [sourceBooks] = state.booksAPI.sourceBooks; // Untouched raw Authors from source

  const [Authors, setAuthors] = useState([]); // Authors after operations (like filters and search)
  const [currentAuthorId, setCurrentAuthorId] = useState("");
  const [currentAuthorInfo, setCurrentAuthorInfo] = useState({});
  const [isAddingAuthor, setIsAddingAuthor] = useState(false);

  const [newAuthor, setNewAuthor] = useState(initialNewAuthorValues);

  useEffect(() => {
    // Search function
    if (!searchTerm) return setAuthors(sourceAuthors);
    setAuthors(
      _.filter(sourceAuthors, ({ name }) => {
        // Advanced Search (checks if serach term and match have all characters in common)
        return name.toLowerCase().includes(searchTerm.toLowerCase());
      })
    );
  }, [searchTerm, sourceAuthors]);

  useEffect(() => {
    const filteredValue = {
      ...sourceAuthors?.filter((Author) => Author._id == currentAuthorId)[0],
      books: sourceBooks?.filter((book) => book.authorId == currentAuthorId),
      auth: currentAuthorId,
    };
    console.log(filteredValue);
    setCurrentAuthorInfo(filteredValue);
  }, [currentAuthorId, sourceAuthors, sourceBooks]);

  const changeGender = (e) => {
    setNewAuthor({
      ...newAuthor,
      isFemale: e.target.value === "true" ? "true" : "false",
    });
  };

  return (
    <>
      <div className="flex justify-between">
        <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm}>
          {/*  Action button: New Author */}
        </Search>
        <button
          className="ml-4 bg-pink-500 text-white rounded-full px-6"
          onClick={() => setIsAddingAuthor(true)}
        >
          + Add Author
        </button>
      </div>
      <div>
        <h1 className="mt-6 text-3xl">Explore Authors</h1>
        <div className="grid grid-cols-4">
          <ItemGrid data={Authors} setIdVariable={setCurrentAuthorId} />
          <div className="">
            {isAddingAuthor && (
              <form
                className="form my-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsAddingAuthor(false);
                  state.authorsAPI.createNewAuthor(newAuthor);
                }}
              >
                <button
                  className="absolute top-5 right-5"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsAddingAuthor(false);
                  }}
                >
                  <FiX className="text-lg" />
                </button>
                <h1 className="h1">Add Author</h1>
                <input
                  value={newAuthor.name}
                  onChange={(e) =>
                    setNewAuthor({ ...newAuthor, name: e.target.value })
                  }
                  type="text"
                  className="inp"
                  placeholder="Name"
                />
                <input
                  value={newAuthor.age}
                  onChange={(e) =>
                    setNewAuthor({ ...newAuthor, age: e.target.value })
                  }
                  type="number"
                  pattern="[0-9]+"
                  className="inp"
                  placeholder="Age"
                />
                <div className="text-left m-2">
                  <input
                    onChange={changeGender}
                    type="radio"
                    name="gender"
                    value="true"
                    id="female"
                    className="mr-2"
                    checked={newAuthor.isFemale === "true"}
                  />
                  <label htmlFor="female">Female</label>
                </div>
                <div className="text-left m-2">
                  <input
                    onChange={changeGender}
                    type="radio"
                    name="gender"
                    value="false"
                    id="male"
                    className="mr-2"
                    checked={newAuthor.isFemale === "false"}
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <button className="btn">Add</button>
              </form>
            )}
            <InfoWidget mode="author" currentData={currentAuthorInfo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Authors;
