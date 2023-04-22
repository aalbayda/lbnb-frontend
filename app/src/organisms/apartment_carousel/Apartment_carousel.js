import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import './apartment_carousel.css';
import {Apartment} from '../../molecules';

const Apartment_carousel = () =>  {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div className="apartment-carousel-container">
            <p className="header3 title">Apartment</p>
            <p className="small subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <Apartment/>
                </Carousel.Item>
                <Carousel.Item>
                    <Apartment/>
                </Carousel.Item>
                <Carousel.Item>
                    <Apartment/>
                </Carousel.Item>
            </Carousel>
        </div>
    );
  }



export default Apartment_carousel;