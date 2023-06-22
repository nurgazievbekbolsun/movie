import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../Apikey";
import lod from '../../../image/user.jpg'
import {Link} from "react-router-dom";

const MoviActor = ({id}) => {
    const [movi,setMovi] = useState([])
    const getMovi = (key) =>{
        axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US`)
            .then(res => setMovi(res.data.cast))
    }
    useEffect(()=>{
getMovi(APIKEY)
    },[])
    console.log('movi',movi)
    return (
        <div id="movi">
            <div className="movi">
                {
                    movi.map(el => (
                        <div className="movi--block">
                            {
                                el.poster_path ?
                                    <Link to={`/movie/details/${el.id}`}>    <img width={150} src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt="img"/>
                                    </Link>
                                    :
                                    <img width={150} src={lod} alt="img"/>
                            }
                            <h3>{el.title}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MoviActor;