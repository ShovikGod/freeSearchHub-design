import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Hero.css'

function Hero() {
    return(
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="1.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="2.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="3.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default Hero;
