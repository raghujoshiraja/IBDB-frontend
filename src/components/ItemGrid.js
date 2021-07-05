import React from "react";
import Loading from "../utils/loading/Loading";

const ItemGrid = ({ setIdVariable, data, onClickCleanup }) => {
  return (
    <div className="mt-4 col-span-3">
      {data.length === 0 ? (
        <Loading>We're waiting for books to appear...</Loading>
      ) : (
        data.map((item) => {
          return (
            <div
              className="px-3 py-2 border-pink-500 border-2 inline-block m-2 rounded-xl shadow-md cursor-pointer"
              key={item._id}
              onClick={() => {
                setIdVariable(item._id);
                onClickCleanup();
              }}
            >
              {item.title}
            </div>
          );
        })
      )}
    </div>
  );
};

export default ItemGrid;
