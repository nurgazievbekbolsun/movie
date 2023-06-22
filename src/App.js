import './App.scss';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import MovieDetails from "./components/MovieDetails";
import ActorsDetails from "./components/Page/ActorsDetils";


function App() {
  return (
    <div className="">
      <Header/>
      <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/popular"} element={<Popular/>}/>
          <Route path={"/card"} element={<TopRated/>} />
          <Route path={"/movie/details/:movieId"} element={<MovieDetails/>} />
          <Route path={"/movie/details/actor/:actorId"} element={<ActorsDetails/>} />
          {/*<Route path={"/movie/details/actord"} element={<ActorsDetails/>} />*/}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
