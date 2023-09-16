import React from 'react'
import "../styles/About.scss";
import logo from "../assets/hit_logo.png";
import img1 from "../assets/panzer.jpg";

const About = () => {
  return (
    <div>
      <div className='about'>
        <div className="top">
          <div className="left">
            <img src={img1} alt="" />
          </div>
          <div className="right">
            <img src={logo} alt="hit-logo" />
            <h2><span>HIT </span>Organization</h2>
            <p>HIT is governed through a board, headed by Chairman HITB. The Board comprising of five members, Member Production Control (MPC), Member Project Planning (MPP), Member Finance (MF), Member Ministerial Coordination (MMC) and Member Private (MP). HIT Board runs HIT on sound administrative and management techniques to efficiently meet the requirements of Defence Production. HIT Headquarters comprise of four Main Directorates:-</p>
            <ul>
              <li>Technical Directorate</li>
              <li>Budget Directorate</li>
              <li> Procurement Directorate</li>
              <li>Commercial Directorate</li>
              <li>Administration Directorate / Security Directorate</li>
            </ul>
          </div>
        </div>
        <div className="center">
          <h2>We Manufacture, Rebuild, Upgrade & Develop Tanks, TankGuns & APCs.</h2>
        </div>
        <div className="bottom">
          <div className="msg">
            <h3>Our Mission</h3>
            <h2>Mission of <span>Heavy Industries Taxila</span> Is To: </h2>
            <p>
              Manufacture, Rebuild, Upgrade & Develop Tanks, Tank Guns & APCs. <br />

              Utilize surplus capacity of factories to meet requirements of civil factor and friendly countries.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About