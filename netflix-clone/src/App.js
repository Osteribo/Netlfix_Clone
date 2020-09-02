import React from 'react';
import './App.css';
import Row from './Row.js';
import requests from './requests.js';

function App() {
  return (
    <div className="App">
      <h1> Heyo Lets Code it up!</h1>

      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}></Row>
      

      <Row title="Trending now" fetchUrl={requests.fetchTrending}></Row>
    </div>
  );
}

export default App;
