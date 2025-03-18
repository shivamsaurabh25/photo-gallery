import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import MediaGrid from "../components/MediaGrid";
import ThemeToggle from "../components/ThemeToggle";

const Home = () => {
  const [query, setQuery] = useState("nature");

  return (
    <div>
      <h1>📸 Photo Gallery</h1>
      <ThemeToggle />
      <SearchBar setQuery={setQuery} />
      <MediaGrid query={query} />
    </div>
  );
};

export default Home;