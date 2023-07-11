import React, {useContext, useEffect, useState} from 'react';
import {APIKEY} from "../Apikey";
import MovieKard from "../MovieKard";
import axios from "axios";
import { LanguageContext } from '../../Context';

const TopRated = () => {
    const [top,setTopRated] = useState([])
    const {language} = useContext(LanguageContext)
    const getTop = (key) =>{
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=1`)
            .then((red)=> setTopRated(red.data.results))
    }
    useEffect(()=>{
        getTop(APIKEY)
    },[language])
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