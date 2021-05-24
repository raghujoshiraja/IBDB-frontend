import React, { useContext } from "react";
import { GlobalState } from '../GlobalState'

function Search() {
  const state = useContext(GlobalState)
  const [searchTerm, setSearchTerm] = state.BookAPI.search

  const onInputChange = (e) => {
    setSearchTerm(e.target.value)
  };

  return (
    <div className="border-pink-500 border-4 flex flex-row align-middle justify-between gap-2 px-4 py-2 rounded-full shadow-lg">
      <input
        type="text"
        value={searchTerm}
        onChange={onInputChange}
        className="ml-2 w-full outline-none"
        placeholder="Search by author, genre, pages, etc..."
      />
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default Search;
