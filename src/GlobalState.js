import React, { createContext } from "react";
import booksAPI from "./api/BookAPI";
import authorsAPI from "./api/AuthorsAPI";

export const GlobalState = createContext();

const DataProvider = ({ children }) => {
  const state = {
    booksAPI: booksAPI(),
    authorsAPI: authorsAPI(),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};

export default DataProvider;
