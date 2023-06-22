import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../Apikey";
import Slider from "react-slick";

const Treiler = ({id}) => {
    const [trei, setTrei] = useState([])
    const getTrei = (key) =>{
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`)
            .then(res => setTrei(res.data.results))
    }
    useEffect(()=>{
        getTrei(APIKEY)
    },[])
    console.log(trei)
    const settings = {
        className: "start",
        // centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        rows: 2,
        // slidesPerRow: 2
    };
    return (
        <div id="treiler">
            <div className="container">
                <div className="treiler">
                    <Slider className="treiler--group" {...settings}>
                            {
                                trei.slice(0,20).map(el =>(
                                    <div className="treiler--block">
                                <iframe width="398" height="274" src={`https://www.youtube.com/embed/${el.key}`}
                                title="Paradise Highway | Starring Frank Grillo, Juliette Binoche &amp; Morgan Freeman | Official Trailer"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen>
                                </iframe>
                                    </div>
                                ))
                            }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Treiler;
// https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=en-US