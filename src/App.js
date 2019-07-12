import React, { useState } from "react";
import "./App.css";
import Joke from "./Joke";
import Stories from "./Stories";
import Tasks from "./Tasks";
import Gallery from "./Gallery";
import Matrix from "./Matrix";

const App = () => {
  const [userQuery, setUserQuery] = useState("");
  const [showGallery, setShowGallery] = useState(true);
  const updateUserQuery = event => {
    setUserQuery(event.target.value);
    console.log(userQuery);
  };
  const searchQuery = () =>
    window.open(`https://google.com/search?q=${userQuery}`, "_blank");

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      searchQuery();
    }
  };

  const toggleShowGallery = () => setShowGallery(!showGallery);

  return (
    <div className="App">
      <h1>Hello Alex</h1>
      <div className="form">
        <input
          onChange={handleKeyPress}
          value={userQuery}
          onChange={updateUserQuery}
        />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
      <hr />
      <Tasks />
      <hr />
      <div>
        {showGallery ? <Gallery /> : null}{" "}
        <button onClick={toggleShowGallery}>
          {showGallery ? "Hide" : "Show"} Gallery
        </button>
      </div>

      <hr />
      <Stories />
      <hr />
      <Matrix />
    </div>
  );
};

export default App;
