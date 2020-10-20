import React from "react";
import "./App.css";
import Row from "./Row.js";
import requests from "./requests.js";
import Banner from "./Banner.js";
import Nav from "./Nav.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />

      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      ></Row>

      <Row title="Trending now" fetchUrl={requests.fetchTrending}></Row>

      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>

      <Row title="Action Movies" fetchUrl={requests.fetchActionMovie}></Row>

      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovie}></Row>

      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovie}></Row>

      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovie}></Row>

      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
