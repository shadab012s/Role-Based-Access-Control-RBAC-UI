import React from "react";

const SearchBar = ({ placeholder, onSearch }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full p-2 border rounded"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
