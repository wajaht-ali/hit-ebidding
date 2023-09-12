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
        interval = {3000}

          className='slider'>
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
    </div>
  )
}

export default Home