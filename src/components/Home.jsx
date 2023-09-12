import React from 'react'
import "../styles/Home.scss";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/img2.jpg";
import img2 from "../assets/panzer.jpg";
import img3 from "../assets/armed-veh.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Home = () => {
  return (
    <div className='home'>
      <div className="carousel">
        <Carousel 
        infiniteLoop
        autoPlay
        showStatus = {false}
        showThumbs = {false}
        interval = {3000}className='slider'>

          <div>
            <img src={img1} alt='carousel-img' />
          </div>
          <div>
            <img src={img2} alt='carousel-img' />
          </div>
          <div>
            <img src={img3} alt='carousel-img' />
          </div>
        </Carousel>
      </div>
      <div className="welcome-banner">
        <div className="welcome-msg">
          <h3>Welcome to <span>Heavy Industries Taxila</span></h3>
          <p>Heavy Industries Taxila was envisaged in the early seventies and its first production unit i.e. Heavy Rebuild Factory     (T-Series) went into production in 1980. This was followed in the early nineties by a number of other factories and today HIT has grown into a military industrial complex which consists of Six Major Production Units, Support Facilities and Administrative Establishment.</p>
        </div>
      </div>
    </div>
  )
}

export default Home;