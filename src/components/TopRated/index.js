import React, {useEffect, useState} from 'react';
import {APIKEY} from "../Apikey";
import MovieKard from "../MovieKard";
import axios from "axios";

const TopRated = () => {
    const [top,setTopRated] = useState([])
    const getTop = (key) =>{
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`)
            .then((red)=> setTopRated(red.data.results))
    }
    useEffect(()=>{
        getTop(APIKEY)
    },[])
    return (
        <section id="rated">
            <div className="container">
                <div className="rated">
                    {top.map((el)=> <MovieKard el={el}/>)}
                </div>
            </div>
        </section>
    );
};

export default TopRated;