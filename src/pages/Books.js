import React, { useState, useEffect, useContext } from "react";
import Hero from "../components/Hero";
import Search from "../components/Search";
import _ from "lodash";

import { GlobalState } from "../GlobalState";

const Books = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const state = useContext(GlobalState);
  const [sourceBooks] = state.booksAPI.sourceBooks;
  const [books, setBooks] = useState([]);
  const [currentBookId, setCurrentBookId] = useState("");
  const [currentBookInfo, setCurrentBookInfo] = useState({});

  useEffect(() => {
    // Search function
    if (!searchTerm) return setBooks(sourceBooks);
    console.log("Searched", searchTerm);
    setCurrentBookInfo(
      _.filter(sourceBooks, ({ title }) => {
        // Advanced Search (checks if serach term and match have all characters in common)
        return [...searchTerm.toLowerCase()].every((char) => title.match(/{sear}/i));
      })
    );
  }, [searchTerm, books, sourceBooks]);

  useEffect(() => {
    setCurrentBookInfo();
  }, [currentBookId]);

  // return (
    // <div>
    //   <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm}>
    //     {/*  Action button: New Book */}
    //     <button className="ml-4 bg-pink-500 text-white rounded-full px-6">
    //       + Add book
    //     </button>
    //   </Search>
    //   <Hero />
    // </div>
  // );
};

export default Books;
