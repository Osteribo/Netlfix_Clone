import axios from "./axios";
import React, {useState, useEffect} from "react";
import requests from "./requests";


function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
        // pull movie data from api
        const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie (

        // grab a random movies from the data to use for banner
        request.data.results[Math.floor(Math.random() * request.data.results.length - 1)] 
        );

        return request;
      }
      fetchData();

  }, []);

  console.log(movie)

  return (
    <header>
      // background image
      {}
      // title
      {}
      // Div 2 buttons
      {}
      // Description
      {}
    </header>
  );
}

export default Banner;
