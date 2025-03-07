import React, { Component } from "react";
import HomeNav from "./HomeNav";
import Carousel from 'react-bootstrap/Carousel';
import imageCarousel from '../Assets/Image/plane.jpg'; 
import imageCarouse2 from '../Assets/Image/hotelRooms.avif';
import imageCarouse3 from '../Assets/Image/packages.webp';
import './HomePage.css';
import FooterBar from "./Footer";

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="Home">
          <HomeNav></HomeNav>
          <div >
          <Carousel>
              <Carousel.Item className="slideShow">
                <img src={imageCarousel} alt="First slide" />
                <Carousel.Caption>
                  <h3>Travel through skies</h3>
                  <p>Choose your destination and enjoy the journey with extraordinary flight experience</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="slideShow">
                <img src={imageCarouse2} alt="Second slide" />
                <Carousel.Caption>
                  <h3>Stays</h3>
                  <p>Indulge in comfort and luxury with our handpicked selection of hotels.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="slideShow">
                <img src={imageCarouse3} alt="Third slide" />
                <Carousel.Caption>
                  <h3>Packages</h3>
                  <p>Experience the ultimate travel convenience with our exclusive hotel and flight packages.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <footerBar></footerBar>
      </div>
    );
  }
}

export default HomePage;
