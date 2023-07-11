import './App.scss';
import { useState } from 'react';
import {Route, Routes, json} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import MovieDetails from "./components/MovieDetails";
import ActorsDetails from "./components/Page/ActorsDetils";
import Search from './components/Search/Search';


function App() {
  const [ser,setSer] = useState(JSON.parse(localStorage.getItem("mode")) || false)
  const Handle = () => {
    JSON.parse(localStorage.getItem("mode"))
    setSer(!ser)
    localStorage.setItem("mode",JSON.stringify(!ser))
  }
  return (
    <div  className='app' style={{
      zIndex:'-3',
      height:'100vh',
      background: ser ? "black" : "white",
      color:ser ? "white" : "black",
      }}>
      <Header ser={ser} Handle={Handle}/>
      <Routes>
          <Route path={"/"} element={<Home ser={ser} Beka={Handle}/>}/>
          <Route path={"/popular"} element={<Popular/>}/>
          <Route path={"/card"} element={<TopRated/>} />
          <Route path={"/movie/details/:movieId"} element={<MovieDetails ser={ser} detal={Handle}/>} />
          <Route path={"/movie/details/actor/:actorId"} element={<ActorsDetails/>} />
          <Route path={"/movie/search/:movieName"} element={<Search/>} />
      </Routes> 
      <Footer/>
    </div>
  );
}

export default App;
