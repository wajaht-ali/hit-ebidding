import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/hit_logo.png";
import "../styles/Header.scss";


const Header = () => {
  return (
    <div className='header'>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Header