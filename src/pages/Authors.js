import React, { useState, useContext, useEffect } from "react";
import { GlobalState } from "../GlobalState";
import _ from "lodash";

import Search from "../components/Search";
import InfoWidget from "../components/InfoWidget";
import ItemGrid from "../components/ItemGrid";

const Authors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const state = useContext(GlobalState);
  const [sourceAuthors] = state.authorAPI.sourceAuthors; // Untouched raw Authors from source
  const [Authors, setAuthors] = useState([]); // Authors after operations (like filters and search)
  const [currentAuthorId, setCurrentAuthorId] = useState("");
  const [currentAuthorInfo, setCurrentAuthorInfo] = useState({});

  useEffect(() => {
    // Search function
    if (!searchTerm) return setAuthors(sourceAuthors);
    console.log("Searched", searchTerm);
    setCurrentAuthorInfo(
      _.filter(sourceAuthors, ({ title }) => {
        // Advanced Search (checks if serach term and match have all characters in common)
        return [...searchTerm.toLowerCase()].every((char) =>
          title.match(/{sear}/i)
        );
      })
    );
  }, [searchTerm, Authors, sourceAuthors]);

  useEffect(() => {
    console.log(
      "Selected Authors",
      sourceAuthors.filter((Author) => Author._id === currentAuthorId)[0]
    );
    setCurrentAuthorInfo(
      sourceAuthors.filter((Author) => Author._id === currentAuthorId)[0]
    );
  }, [currentAuthorId, sourceAuthors]);

  console.log("\n\n!!! Authors !!!", Authors);

  return (
    <>
      <div className="flex justify-between">
        <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm}>
          {/*  Action button: New Author */}
        </Search>
        <button className="ml-4 bg-pink-500 text-white rounded-full px-6">
          + Add Author
        </button>
      </div>
      <div>
        <h1 className="mt-6 text-3xl">Explore Authors</h1>
        <div className="grid grid-cols-4">
          <ItemGrid data={Authors} setIdVariable={setCurrentAuthorId} />
          <InfoWidget currentData={currentAuthorInfo} />
        </div>
      </div>
    </>
  );
};

export default Authors;
