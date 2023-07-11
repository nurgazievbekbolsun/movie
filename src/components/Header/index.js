import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate,  } from "react-router-dom";
import logo from "../../image/logo.svg";
import { BsCloudRainFill, BsMoonStars, BsSun } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
// import { FiDelete } from "react-icons/fi";
import { AiTwotoneBulb } from "react-icons/ai";
import { LanguageContext } from "../../Context";

const Header = ({Handle,ser}) => {
  const [blok, setBlok] = useState(false);
  const [dack, setDack] = useState(0);
  const [blo, setBlo] = useState(false);
  const [serch, setSerch] = useState("");
  // const [value,setValue] = useState('')
  const nav = useNavigate()
  // const { language } = useContext(LanguageContext);
  const { setLanguage } = useContext(LanguageContext);
  return (
    <header style={{
      // height:block ? '0' : '0'
    }} id="header">
      <div className="container">
        <div className="header">
          <nav  className="header--link">
            <img src={logo} alt="img" />
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/popular"}>Popular</NavLink>
            <NavLink to={"/card"}>TopRated</NavLink>
          </nav>
          <div className="header--group">
            {/* 1111111111111 */}
            <div
              style={{
                color: "white",
                fontSize: "25px",
                position: "relative",
                cursor: "pointer",
              }}
              className="header--group__icon"
            >
              <AiTwotoneBulb
              style={{
                borderBottom:'2px solid white',
                fontSize:'20px',
                color:blo ? 'yellow' : 'wheat',
                padding:'0 0 2px 0'
              }}
                onClick={() => {
                  setBlo(!blo);
                }}
              />
              <div
                style={{
                  display: blo ? "block" : "none",
                }}
                className="header--group__icon--bg"
              >
                  { 
                  ser ? <BsSun onClick={() => Handle(ser)}/> 
                   :  <BsMoonStars onClick={() => Handle(ser)}/>
                  }
                <BsCloudRainFill onClick={() => { setDack(2);}} />
              </div>
            </div>
            {/* 111111111111 */}
            <select
              onChange={(e) => {
                setLanguage(e.target.value);
              }}>
              <option value="en-US">en</option>
              <option value="ru-RU">ru</option>
            </select>
            <button>Войти</button>
            <Link  style={{
            display: blok ? 'none' : 'block'
        }} >Присоединиться к TMDB</Link>
        <div className="bler"
              style={{
                display: "flex",
                gap: "10px",
                display: blok ? "block" : "none",
              }}>
              <input onChange={(e)=>{
                setSerch(e.target.value)
              }} style={{
                  border:'2px solid red',
                  zIndex:'50',
                  boxShadow: "0 0 8px  white",
                  color: "white",
                  border: "1px solid white",
                  background: "none",
                  outline: "none",
                  borderRadius: "10px",
                  padding: "8px 22.6px 8px 20px",
                  caretColor:'red'
                }}
                type="text"
                placeholder="Поиск..."
              /> 
              {
                serch.length ? <button onClick={()=>{
                nav(`/movie/search/${serch}`)
              }} style={{
                color:'white',
                fontSize:'14px',
                borderRadius:'6px',
                padding:'7px 5px',
                background:'aqua',
                margin:'0 0 0 10px'
              }}>search</button> : null
              }
              
              {/* <FiDelete
                style={{
                  // margin: "3px 0 0 610px",
                  color: "white",
                  fontSize: "25px",
                }}
              /> */}
            </div>
            <button
              onClick={() => {
                setBlok(!blok);
              }}
              id="btn">
              <FaSearch style={{
                color:'wheat'
              }}/>
            </button>
          </div>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
