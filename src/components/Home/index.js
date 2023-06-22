import React, {useEffect, useState} from 'react';
import {APIKEY} from "../Apikey";
import {NavLink} from "react-router-dom";
import MovieKard from "../MovieKard";
import axios from "axios";
// import Slider from "react-slick";

const Home = () => {
    const [value, setValue] = useState([])
    const [count, setCount] = useState(false)
    const [count1, setCount1] = useState(false)
    const [trn,setTrn] = useState(false)
    const AddTooPopular = (key) => {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
            .then((res) => setValue(res.data.results))
    }
    useEffect(() => {
        AddTooPopular(APIKEY)
    }, [])
    const state = Math.floor(Math.random() * 20)
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // };
    return (
        <section id="home">
            <div className="container">
                <div className="home"
                     style={{background: `url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/${value.map(el => el.poster_path)[state]}") no-repeat`}}>
                    <h1>Добро пожаловать.</h1>
                    <p>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</p>
                    <div className="home--input">
                        <input type="text" placeholder="Найти фильм, сериал, персону...."/>
                        <button>search</button>
                    </div>
                </div>
                <div className="trend">
                    <div className="trend--text">
                        <h3>В тренде</h3>
                        <div className="trend--text__btn">
                            <NavLink to={""}>
                                <button style={{
                                    background: count === true ? 'blue' : 'white',
                                    padding: '5px 20px',
                                    color: count ? "white" : "black",
                                    borderRadius:'30px',
                                    // transform:trn === count ? 'translateX(200px)' : 'translateX(0)
                                }} onClick={() => {
                                    setCount(count ? false : true)
                                    setTrn(trn ? false :true)
                                    setCount1(false)}}>Сегодня
                                </button>
                            </NavLink>
                            <NavLink to={""}>
                                <button style={{
                                    background: count1 === true ? 'blue' : 'white',
                                    padding: '5px 20px',
                                    color: count1 ? "white" : "black",
                                    borderRadius:'30px',
                                    // transform:trn === count1 ? 'translateX(200px)' : 'translateX(0)
                                }} onClick={()=>{
                                    setTrn(trn ? true :false)
                                    setCount1(count1 ? false : true)
                                    setCount(false)}}>На этой неделе</button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="slid">
                        {value.map((el) => <MovieKard key={el} el={el}/>)}
                    </div>
                </div>
            </div>
        </section>
    );
}
;export default Home;



