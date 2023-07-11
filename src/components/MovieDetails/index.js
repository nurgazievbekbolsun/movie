import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {APIKEY} from "../Apikey";
import {TfiMenuAlt} from "react-icons/tfi";
import {AiFillStar, AiTwotoneHeart} from "react-icons/ai";
import {BsFillBookmarkFill} from "react-icons/bs";
import Actors from "../Page/Actors";
import Treiler from "../Page/Treiler";
import {FiX} from "react-icons/fi";
import fac from "../../image/bezBg.webm"

const MovieDetails = ({ser}) => {
    const [ten,setTen] = useState(false)
    const [modal, setModal] = useState(false)
    const [color,setColor] = useState(false)
    const [color1,setColor1] = useState(false)
    const [color2,setColor2] = useState(false)
    const [color3,setColor3] = useState(false)
    const {movieId} = useParams()
    console.log(movieId)
    const [details, setDetails] = useState([])
    const getDetails = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=ru-RU`)
            .then(res => setDetails(res.data))
    }
    useEffect(() => {
        getDetails(APIKEY)
    }, [])
    console.log("DEtails",details)
    const {
        title, poster_path, backdrop_path,
         vote_average, tagline, runtime, genres, release_date
        , overview,
    } = details   
    return (
        <>
            <div  style={{
                boxShadow:'900px 0 0 400px black inset',
                objectFit: 'cover',
                background: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}) no-repeat center/cover`
            }} id="details">
                 {/* {
                  <video autoPlay loop style={{
                position:'absolute',
                top:'-70px',
                width:'100%',
                  height:'100%'    ,
                  zIndex:'-2'      
         }}  src={fac}>
         </video> 
        
            } */}
                <div className="container">
                    <div  
             className="details">
               
                            <div className="details--ten">
                                <img src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${details.poster_path}`} alt="img"
                                    onClick={()=>{
                                        setModal(true)}}/>
                                <div className="details--ten__modal" style={{
                                    boxSizing:'border-box',
                                    display:modal ? "block" : "none"}}>
                                    <img width={390} src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${poster_path}`} alt="img"/>
                                    <button onClick={()=>{
                                        setTen(false)
                                        setModal(false)
                                    }
                                    } style={{
                                        color:'red',
                                        position:'absolute',
                                        top:'20px',
                                        fontSize:'20px',
                                        right:'20px'
                                    }}><FiX/></button>
                                </div>
                            </div>
                        <div className="details--group">
                            <div className="details--group__block">
                                <h1>{title} <span>(2023)</span></h1>
                                <div className="details--group__block--text">
                                    <td>R21</td>
                                    <span>{release_date} (PL)</span>
                                    <li>{genres?.map((el) => <span>{el.name},</span>)}</li>
                                    <span>{Math.floor(runtime / 60)}h {runtime % 60}m</span>
                                </div>
                                <div className="details--group__block--krug">
                                    <div className="details--group__block--text2" style={{
                                        background:`conic-gradient(green ${Math.round(vote_average * 10) * 3.59}deg, #253625 0deg)`
                                    }}>
                                        <h3>{Math.round(vote_average * 10)}%</h3>
                                    </div>
                                    <h2>Рейтинг</h2>
                                    <ul>
                                        <li style={{
                                            background:' #151546',
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50%',
                                            display:' flex',
                                            alignItems: 'center',
                                            justifyContent:' center',
                                            color:color,
                                            fontSize:'20px'
                                        }}>
                                            <TfiMenuAlt onClick={()=>{
                                                setColor(color === false ? 'black' : false)
                                            }}/>
                                        </li>
                                        <li style={{
                                            background:' #151546',
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50%',
                                            display:' flex',
                                            alignItems: 'center',
                                            justifyContent:' center',
                                            color:color1,
                                            fontSize:'20px'
                                        }}>
                                            <AiTwotoneHeart onClick={()=>{
                                                setColor1(color1 === false ? 'red' : false)
                                            }}/>
                                        </li>
                                        <li style={{
                                            background:' #151546',
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50%',
                                            display:' flex',
                                            alignItems: 'center',
                                            justifyContent:' center',
                                            color:color2,
                                            fontSize:'20px'
                                        }}>
                                            <BsFillBookmarkFill onClick={()=>{
                                                setColor2(color2 === false ? 'black' : false)
                                            }}/>
                                        </li>
                                        <li style={{
                                            background:' #151546',
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50%',
                                            display:' flex',
                                            alignItems: 'center',
                                            justifyContent:' center',
                                            color:color3,
                                            fontSize:'20px'
                                        }}>
                                            <AiFillStar onClick={()=>{
                                                setColor3(color3 === false ? 'yellow' : false)
                                            }}/>
                                        </li>
                                    </ul>
                                </div>
                                <p>{tagline}</p>
                            </div>
                            <div className="details--group__block2">
                                <h2>Обзор</h2>
                                <p>{overview}</p>
                                <div className="details--group__block2--text">
                                <span>
                                    <h1>Mateusz Rakowicz</h1>
                                    <h6>Director, Writer</h6>
                                </span>
                                    <span>
                                    <h1>Łukasz M. Maciejewski</h1>
                                    <h6> Writer</h6>
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Actors Id={movieId}/>
            <Treiler id={movieId}/>
            {/*<ActorsDetils Id={m}/>*/}
        </>


    );
};

export default MovieDetails;