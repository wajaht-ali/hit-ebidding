import React from 'react'
import logo from "../assets/hit_logo.png";
import "../styles/Header.scss";

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
    </div>
  )
}

export default Header