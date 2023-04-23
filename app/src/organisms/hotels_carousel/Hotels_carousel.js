import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import './hotels_carousel.css';
import {Hotels} from '../../molecules';

const Hotels_carousel = () =>  {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div className="apartment-carousel-container">
            <p className="header3 title">Hotels</p>
            <p className="small subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <Hotels/>
                </Carousel.Item>
                <Carousel.Item>
                    <Hotels/>
                </Carousel.Item>
                <Carousel.Item>
                    <Hotels/>
                </Carousel.Item>
            </Carousel>
        </div>
    );
  }



export default Hotels_carousel;