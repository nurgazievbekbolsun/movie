import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { APIKEY } from '../Apikey'
import MovieKard from '../MovieKard'

const Search = () => {
  const [search ,setSearch] = useState([])
  const {movieName} = useParams()
  const getSearch = (key) =>{
    axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`)
    .then(res => setSearch(res.data.results))
  }
  useEffect(()=>{
getSearch(APIKEY)
  },[])
  console.log(search)
  return (
    <div id="search">
      <div className="container">
      <div className="search">
                    {search.slice(0,8).map((el)=> <MovieKard el={el}/>)}
                </div>
    </div>
    </div>
    
  )
}

export default Search;
// https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}

