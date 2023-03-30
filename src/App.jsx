import React, { useState } from "react";
import searchImages from "./api";
import ImageList from "./components/image-list/image-list.component";
import SearchBar from "./components/search-bar/search-bar.component";
import "./App.css";
const App = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div className="app">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
