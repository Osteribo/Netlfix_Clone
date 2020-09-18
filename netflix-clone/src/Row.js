// this is an component hence the the capital R in Row.js
// this will create the rows and sections for the api to fill with shows/movies


import React, {useState, useEffect} from 'react';
import axios from './axios';

const base_url = "https://image.tmdb.org/t/p/original/";

// useState for short term vairiables. They will empty on refresh

function Row({title, fetchUrl}) {
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
    
  
    console.table(movies);

    return (
        <div className="row">

            <h2> {title}</h2>
                
            <div className='row_posters'>

                {movies.map(movie =>(
                    <img src={`${base_url}${movie.poster_path}`} alt={movie.name}/> )
                )}
                    
            </div>

        </div>
    )
}

export default Row
