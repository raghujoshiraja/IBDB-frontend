import React from "react";
import "./loading.css";

const Loading = ({ children }) => {
  return (
    <div className="flex-grow">
      <div className="loading"></div>
      <p className="text-center text-gray-600 max-w-md m-auto">
        {children || `We're waiting for some data...`}
      </p>
    </div>
  );
};

export default Loading;
