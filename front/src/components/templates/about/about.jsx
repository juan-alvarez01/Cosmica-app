import React from "react";
import { Carousel } from "react-responsive-carousel";
import MainLayout from '../../layout/MainLayout'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./About.css";
const About = () => {
  return (
    <MainLayout>
            <img src="/Media/Gif/Rick-And-Morty.gif"/>
    <div className="about-container">
      <h2>Carousel de Imágenes</h2>
      <Carousel
        showArrows={false}
        showStatus={false}
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        transitionTime={500}
      >
        <div className="carousel-item">
          <img src="/media/images/rick1.jpg" alt="Imagen 1" />
        </div>
        <div className="carousel-item">
          <img src="/media/images/rick2.jpg" alt="Imagen 2" />
        </div>
        <div className="carousel-item">
          <img src="/media/images/rick3.jpg" alt="Imagen 3" />
        </div>
      </Carousel>
    </div> 
        </MainLayout>
  );
};
export default About;
