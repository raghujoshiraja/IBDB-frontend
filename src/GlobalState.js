import React, { createContext } from "react";
import booksAPI from "./api/BookAPI";

export const GlobalState = createContext();

const DataProvider = ({ children }) => {
  const state = {
    booksAPI: booksAPI(),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};

export default DataProvider;
