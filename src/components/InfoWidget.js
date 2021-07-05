import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../GlobalState";

function InfoWidget({ currentData }) {
  const state = useContext(GlobalState);
  const [sourceAuthors] = state.authorAPI.sourceAuthors;
  const [currentAuthor, setCurrentAuthor] = useState({});

  useEffect(() => {
    currentData &&
      setCurrentAuthor(
        sourceAuthors.filter((author) => author._id === currentData.authorId)[0]
      );
  }, [currentData, sourceAuthors]);

  return (
    <div className="border-pink-500 border-4 p-8 rounded-3xl shadow-xl w-full">
      <h1 className="h1 max-w-xl">{currentData?.title || "Click book"}</h1>
      <h2 className="h2">
        By{" "}
        {!currentAuthor?.name ? (
          <>Author</>
        ) : (
          <Link to="" className="underline">
            {currentAuthor?.name || "<Author Name>"}
          </Link>
        )}
      </h2>
      <Link to={{ query: { author: currentAuthor?.name } }}>
        More Books by the author:
      </Link>
    </div>
  );
}

export default InfoWidget;
