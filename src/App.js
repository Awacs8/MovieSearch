import React, { useEffect } from "react";
import "./style.css";
import SearchMovies from "./SearchMovies";

function App() {
  useEffect(() => {
    fetch(".netlify/functions/lambda")
      .then((response) => response.json.toString())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="container">
      <h1 className="title">Find a movie</h1>
      <SearchMovies />
    </div>
  );
}

export default App;
