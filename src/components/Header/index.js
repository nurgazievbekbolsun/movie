import React from 'react';
import {Link, NavLink} from "react-router-dom";
import logo from '../../image/logo.svg'
import {AiOutlinePlus} from "react-icons/ai";
import {FaSearch} from "react-icons/fa";

const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="header">
                    <nav className="header--link">
                    <img src={logo} alt="img"/>
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"/popular"}>Popular</NavLink>
                        <NavLink to={"/card"}>TopRated</NavLink>
                    </nav>
                    <div className="header--group">
                        <NavLink><AiOutlinePlus/></NavLink>
                        <select>
                            <option value="">en</option>
                            <option value="">ru</option>
                        </select>
                        <button>Войти</button>
                        <Link>Присоединиться к TMDB</Link>
                        <button id="btn"><FaSearch/></button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;