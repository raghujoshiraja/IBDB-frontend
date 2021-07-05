import React from "react";

const Search = ({ setSearchTerm, searchTerm }) => {
  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="border-pink-500 border-4 flex flex-row align-middle justify-between gap-2 px-4 py-2 rounded-full shadow-lg flex-grow">
      <input
        type="text"
        value={searchTerm}
        onChange={onInputChange}
        className="ml-2 w-full outline-none"
        placeholder="Search by author, genre, pages, etc..."
      />
    </div>
  );
};

export default Search;
