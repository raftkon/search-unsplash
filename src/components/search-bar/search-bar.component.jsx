import React, { useState } from "react";
import "./search-bar.styles.css";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="">Enter Search Term</label>
        <input value={term} type="text" onChange={handleChange} />
      </form>
    </div>
  );
};

export default SearchBar;
