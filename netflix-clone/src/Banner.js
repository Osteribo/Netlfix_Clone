import axios from "./axios";
import React, { useState, useEffect } from "react";
import requests from "./requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // pull movie data from api
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        // grab a random movies from the data to use for banner
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    // this header allows for styling of the background image that will not clash with "div" sections
    <header
      className="banner"
      style={{
        // tell the browser to have image cover space
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/* background image */}
        <h1>
          {/* this will pull the title or (||) name or (||) orignal_name from the movie state/effect above. 
        if there is nothing there then the Optional Chaining feature (?) will tell keep it from crashing by giving null  */}
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        // title
        {}
        // Div 2 buttons
        {}
        // Description
        {}
      </div>
    </header>
  );
}

export default Banner;
