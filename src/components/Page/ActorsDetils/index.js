import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../../Apikey";
// import MovieActor from "../movieActor";
import {AiOutlineArrowDown} from "react-icons/ai";
import MoviActor from "../movieActor";

const ActorsDetails = () => {
    const {actorId} = useParams()
    const [actorDetails, setActorDetails] = useState({})
    const [next, setNext] = useState(false)
    const getActor = (key) => {
        axios(`https://api.themoviedb.org/3/person/${actorId}?api_key=${key}&language=ru-RU`)
            .then(res => setActorDetails(res.data))
    }
    useEffect(() => {
        getActor(APIKEY)
    }, [])
    console.log('actor', actorDetails)
    const {
        profile_path, birthday, place_of_birth, also_known_as,
        biography, name
    } = actorDetails
    return (
        <div id="actord">
            <div className="container">
                <div className="actord">
                    <div className="actord--img">
                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`} alt="img"/>
                    </div>
                    <div className="actord--block">
                        <h1 style={{
                            display:'flex',
                            justifyContent:'space-between',
                            alignItems:'center',
                            color:'white'
                        }}>{name} <Link style={{
                        color:'white'}
                        } to={"/actord"}><AiOutlineArrowDown/></Link></h1>
                        <h3>Биография</h3>
   <p>{biography?.slice(0, 200)}{next ? biography : ''}<span style={{color:'blue',cursor:'pointer'}} onClick={()=>{setNext(!next)}}>{next ? 'Close' : 'More...'}</span>
                        </p>
                        <div className="actord--block__day">
                            <ul>
                                <h2>Также известно как</h2>
                                <h3>{also_known_as?.map((el) => <li key={el} >{el}</li>)}</h3>
                            </ul>
                            <div>
                                <h2>Дата рождение</h2>
                                <h3>{birthday}</h3>
                            </div>
                            <div>
                                <h2>Место рождение</h2>
                                <h4>{place_of_birth}</h4>
                            </div>
                        </div>
                    </div>
            </div>
                <MoviActor id={actorId}/>
                </div>
        </div>
    );
};

export default ActorsDetails;