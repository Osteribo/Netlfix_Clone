// this is an component hence the the capital R in Row.js
// this will create the rows and sections for the api to fill with shows/movies

import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

// useState for short term vairiables. They will empty on refresh

function Row({ title, fetchUrl, isLargeRow }) {
  // short term holder for movies to populate
  const [movies, setMovies] = useState([]);

  // each time the row is loaded this is called to fill the rows with movies from the fetchUrl.

  useEffect(() => {
    // in order to use async inside of useEffect you need to make it a function.
    async function fetchData() {
      // create a variable to store response from server
      const request = await axios.get(fetchUrl);
      // check that there are results
      setMovies(request.data.results);
      // return the variable with data to the row
      return request;
    }
    fetchData();
    // if [] contain a variable then it will load anytime the variable changes. if [] is empty then it only runs once per Row call. it is a --dependecy variable--.

    // in this case "fetchUrl" is our dependecy. It is from outside the useEffect() block and needs to update whenever row is called.
  }, [fetchUrl]);

  // console.table(movies);

  // fuction to play trailer when a movie is clicked on the screen
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleClick = (movie) => {
    // set trailer url to stop playing other video if one is playing
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      console.log(movie.name);
      movieTrailer(movie?.title || movie?.name || movie?.source)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          setTrailerUrl(urlParams.get("v"));
          console.log("the url for the trailer is " + trailerUrl);
        })
        .catch((error) => console.log(error));

      // async function fetchVideo() {
      //   // create a variable to store response from server
      //   const request = await axios.get(
      //     `/movie/${movie.id}/videos?api_key=4d39fff22390e1871bfb88ccc0ac8426&language=en-US`
      //   );
      //   // check that there are results
      //   console.log(request);
      //   console.log(request.data);
      //   console.log(request.data.results);
      //   console.log(request.data.results[0].key);

      //   setTrailerUrl(
      //     request.data.results[0].key
      //     // https://api.themoviedb.org/3/movie/3/videos?api_key=4d39fff22390e1871bfb88ccc0ac8426&language=en-US
      //   );
      //   // return the variable with data to the row
      //   return request;
      // }
      // fetchVideo();

      console.log(trailerUrl);
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoPlay: 1,
    },
  };

  return (
    <div className="row">
      <h2> {title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            // "key" will optimize the rendering of the images. This is critical in production systems with lots of images. should be general practice.  In this case it will keep react from rending the same movie poster image more than once
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      <div className="row_video_player">
        {/* https://www.youtube.com/watch?v=H9Ht27r7ROk */}
        {console.log(typeof trailerUrl)}
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
