import React from 'react'
import logo from "../assets/hit_logo.png";
import "../styles/Header.scss";
import { NavLink } from 'react-router-dom';
import { MdOutlineArrowDropDown, MdArrowDownward } from "react-icons/md";
// import { useState } from 'react';

const Header = () => {
  return (
    <div className='header'>
      <div className="main-header">
        <div className="logo">
          <img src={logo} alt="hit-logo" />
        </div>
        <div className="headings">
          <h1>Heavy <span>Industries</span> Taxila</h1>
          <p>Strength Through Self Reliance</p>
        </div>
      </div>
      <nav>
        <ul>
          <li><NavLink to={"/"} className={"link"}>Home</NavLink></li>
          <li><NavLink to={"/about"} className={"link"}>About</NavLink></li>
          <li>Services <MdOutlineArrowDropDown />
            <ul className='submenu'>
              <li><NavLink className="link">Link 1</NavLink></li>
              <li><NavLink className="link">Link 2</NavLink></li>
              <li><NavLink className="link">Link 3</NavLink></li>
              <li><NavLink className="link">Link 4</NavLink></li>
            </ul>
          </li>
          {/* <li><NavLink to={"/services"} className={"link"}>Services <MdOutlineArrowDropDown /></NavLink>
          </li> */}
          <li><NavLink to={"/ebidding"} className={"link"}>Ebidding</NavLink></li>
          <li><NavLink to={"/contact-us"} className={"link"}>Contact</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header