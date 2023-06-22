import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../Apikey";
import Slider from "react-slick";
import icon from "../../../image/user.jpg"
import {Link} from "react-router-dom";
const Actors = ({Id}) => {
    const [actors, setActors] = useState([])
    const getActors = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${Id}/credits?api_key=${key}&language=ru-RU`)
            .then(res => setActors(res.data.cast))
    }
    useEffect(() => {
        getActors(APIKEY)
    }, [])
    console.log(actors)

        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
    return (
        <div id="actors">
            <div className="container">
                <h2>Актерский состав сериалы</h2>
                <Slider className="actors" {...settings}>
                       {
                           actors.map(el =>(
                               <div className="actors--card">
                                       <Link to={`/movie/details/actor/${el.id}`}>
                                   {
                                       el.profile_path ?
                                           <img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`} alt="img"/>
                                           : <img src={icon} width={200} alt=""/>
                                   }
                                   </Link>
                                   <h4>{el.name}</h4>
                                   <p>{el.character}</p>
                                   <p>{el.popularity}</p>
                               </div>
                           ))
                       }
                </Slider>
                <h3>Полный актёрский и съёмочный состав</h3>
            </div>

        </div>
    );
};
export default Actors;

