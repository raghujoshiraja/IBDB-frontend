import React, { useState, useEffect, useContext } from "react";
import Search from "../components/Search";
import ItemGrid from "../components/ItemGrid";
import BookInfoWidget from "../components/BookInfoWidget";
import { FiX } from "react-icons/fi";
import { useParams } from "react-router";
import _ from "lodash";

import { GlobalState } from "../GlobalState";

const initialNewBookValues = {
  title: "",
  pageCount: 1,
  genre: "",
  authorId: "",
  description: "",
};

const Books = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const state = useContext(GlobalState);
  const [sourceBooks] = state.booksAPI.sourceBooks; // Untouched raw books from source
  const [sourceAuthors] = state.authorsAPI.sourceAuthors; // Untouched raw books from source
  const [books, setBooks] = useState([]); // Books after operations (like filters and search)
  const [currentBookId, setCurrentBookId] = useState("");
  const [isAddingBook, setIsAddingBook] = useState(false);
  const [currentBookInfo, setCurrentBookInfo] = useState({});
  const { id: urlId } = useParams();

  const [newBook, setNewBook] = useState(initialNewBookValues);

  useEffect(() => {
    if (urlId) {
      setCurrentBookId(urlId);
    }
  }, [urlId]);

  useEffect(() => {
    // Search function
    if (!searchTerm) return setBooks(sourceBooks);
    setBooks(
      _.filter(sourceBooks, ({ title }) => {
        // Advanced Search (checks if serach term and match have all characters in common)
        return title.toLowerCase().includes(searchTerm.toLowerCase());
      })
    );
  }, [searchTerm, sourceBooks]);

  useEffect(() => {
    setCurrentBookInfo(
      sourceBooks.filter((book) => book._id === currentBookId)[0]
    );
  }, [currentBookId, sourceBooks]);

  return (
    <>
      <div className="flex justify-between">
        <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm}>
          {/*  Action button: New Book */}
        </Search>
        <button
          onClick={() => setIsAddingBook(true)}
          className="ml-4 bg-pink-500 text-white rounded-full px-6"
        >
          + Add book
        </button>
      </div>
      <div>
        <h1 className="mt-6 text-3xl">Explore Books</h1>
        <div className="grid grid-cols-4">
          <ItemGrid
            data={books}
            setIdVariable={setCurrentBookId}
            onClickCleanup={() => setIsAddingBook(false)}
          />
          <div className="">
            {isAddingBook && (
              <form
                className="form my-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsAddingBook(false);
                  state.booksAPI.createNewBook(newBook);
                  setNewBook(initialNewBookValues);
                }}
              >
                <button
                  className="absolute top-5 right-5"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsAddingBook(false);
                  }}
                >
                  <FiX className="text-lg" />
                </button>
                <h1 className="h1">Add Book</h1>
                <input
                  value={newBook.title}
                  onChange={(e) =>
                    setNewBook({ ...newBook, title: e.target.value })
                  }
                  type="text"
                  className="inp"
                  placeholder="Title"
                />
                <input
                  value={newBook.pageCount}
                  onChange={(e) =>
                    setNewBook({ ...newBook, pageCount: e.target.value })
                  }
                  type="text"
                  className="inp"
                  placeholder="Page Count"
                />
                <input
                  value={newBook.genre}
                  onChange={(e) =>
                    setNewBook({ ...newBook, genre: e.target.value })
                  }
                  type="text"
                  className="inp"
                  placeholder="Genre"
                />
                <select
                  type="text"
                  name="city"
                  list="cityname"
                  className="inp"
                  value={newBook.authorId}
                  onChange={(e) =>
                    setNewBook({ ...newBook, authorId: e.target.value })
                  }
                >
                  <option value="" hidden disabled>
                    Select Author
                  </option>
                  {sourceAuthors.length > 0 &&
                    sourceAuthors.map((author) => (
                      <option key={author._id} value={author._id}>
                        {author.name}
                      </option>
                    ))}
                </select>
                <textarea
                  name=""
                  id=""
                  className="inp rounded-3xl"
                  placeholder="Description"
                  value={newBook.description}
                  onChange={(e) =>
                    setNewBook({ ...newBook, description: e.target.value })
                  }
                ></textarea>
                <button className="btn">Create</button>
              </form>
            )}
            <BookInfoWidget mode="book" currentBookData={currentBookInfo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
