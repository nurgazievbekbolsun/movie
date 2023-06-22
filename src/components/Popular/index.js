import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../Apikey";
import MovieKard from "../MovieKard";

const Popular = () => {
   const [popular,setPopular] = useState([])
    const [page,setPage] = useState(1)
const getPopular = (key) =>{
       window.scroll(0,0)
       axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${page}`)
           .then((res)=> setPopular(res.data.results))
    }
    useEffect(() => {
    getPopular(APIKEY)
    },[page])
    console.log(popular)
    return (
            <section id="popular">
                <div className="container">
                <div className="popular">
                    {popular.slice(0,8).map((el)=> <MovieKard el={el}/>)}
                    <button style={{
                        border:'2px solid white',
                        padding:'5px 20px',
                        fontSize:'18px',
                    color:'white'}
                    } onClick={()=>{
                        setPage(page === 1 ? page : page -1)}
                    }>last</button>
                    <h2 style={{
                        border:'2px solid white',
                        padding:'5px 20px',
                        fontSize:'18px',
                        color:'white'
                    }}>{page}</h2>
                    <button style={{
                        border:'2px solid white',
                        padding:'5px 20px',
                        fontSize:'18px',
                        color:'white'}
                    } onClick={()=>{
                        setPage(page +1)
                    }}>next</button>
                </div>
                </div>
            </section>
    );
};

export default Popular;