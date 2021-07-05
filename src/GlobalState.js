import React, { createContext } from "react";
import booksAPI from "./api/BookAPI";
import authorAPI from "./api/AuthorAPI";

export const GlobalState = createContext();

const DataProvider = ({ children }) => {
  const state = {
    booksAPI: booksAPI(),
    authorAPI: authorAPI(),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};

export default DataProvider;
