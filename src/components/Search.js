import React, { useContext } from "react";
import { GlobalState } from "../GlobalState";

function Search({ children, setSearchTerm, searchTerm }) {
  const state = useContext(GlobalState);

  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex justify-between">
      <div className="border-pink-500 border-4 flex flex-row align-middle justify-between gap-2 px-4 py-2 rounded-full shadow-lg flex-grow">
        <input
          type="text"
          value={searchTerm}
          onChange={onInputChange}
          className="ml-2 w-full outline-none"
          placeholder="Search by author, genre, pages, etc..."
        />
      </div>
      {children}
    </div>
  );
}

export default Search;
