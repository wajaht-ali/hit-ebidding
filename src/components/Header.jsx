import React from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/hit_logo.png";
import "../styles/Header.scss";


const Header = () => {
  return (
    <div className='header'>
      <div className="container">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="hit-logo" />
          </Link>
        </div>
        <div className="main-heading">
          <h1>Heavy <span>Industries</span> Taxila</h1>
          <p>Strenght Through Self Reliance</p>
        </div>
      </div>
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <NavLink className="links" to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink className="links" to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink className="links" to={"/services"}>Services</NavLink>
            </li>
            <li>
              <NavLink className="links" to={"/contact-us"}>Contact Us</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header