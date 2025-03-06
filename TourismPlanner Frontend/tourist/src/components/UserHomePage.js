import React, { Component } from "react";
import HomeNav from "./HomeNav";
import Carousel from 'react-bootstrap/Carousel';
import imageCarousel from '../Assets/Image/plane.jpg'; 
import imageCarouse2 from '../Assets/Image/hotelRooms.avif';
import imageCarouse3 from '../Assets/Image/packages.webp';
import './HomePage.css';
import FooterBar from "./Footer";
import Navigation from "./Navigation";

class HomePage extends Component {
  
  render() {
    let user=JSON.parse(localStorage.getItem('user-info'))
    console.warn(user);
    return (
      <div>
        <div className="Home">
          <Navigation/>
          <div >
            <Carousel>
              <Carousel.Item className="slideShow">
                <img src={imageCarousel} alt="First slide" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="slideShow">
                <img src={imageCarouse2} alt="Second slide" />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="slideShow">
                <img src={imageCarouse3} alt="Third slide" />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <FooterBar></FooterBar>
      </div>
    );
  }
}

export default HomePage;
