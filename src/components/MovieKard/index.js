import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import "./MovieCard.scss"
const MovieKard = ({ser,el}) => {
    console.log("ser",ser);
    const nav = useNavigate()
    const getNav =() => {
            nav(`/movie/details/${el.id}`)
    }
    return (
            <div className="movie">
    
               <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt="img" onClick={() => getNav() }/>
               
               <div className="movie--block">
                   <h3 style={{
                    color:ser ? "white" : "black"
                   }}> {el.title}</h3>
                   <p style={{
                    color:ser ? "white" : "black"
                   }}>{el.release_date}</p>
                   <span>{el.vote_average}</span>
               </div>
            </div>

    );
};

export default MovieKard;