import React from 'react';
import './style.css';
import SearchMovies from './SearchMovies'

function App() {
  return (
    <div className="container">
      <h1 className="title">Find a movie</h1>
      <SearchMovies/>
    </div>
  );
}

export default App;
