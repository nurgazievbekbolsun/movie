import React from 'react';
import {Link} from "react-router-dom";

const MovieKard = ({el}) => {
    return (
        <div id="movie">
            <div className="movie">
               <Link to={`/movie/details/${el.id}`}>
                   <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt="img"/>
               </Link>
               <div className="movie--block">
                   <h3> {el.title}</h3>
                   <p>{el.release_date}</p>
                   <span>{el.vote_average}</span>
               </div>
            </div>
        </div>
    );
};

export default MovieKard;