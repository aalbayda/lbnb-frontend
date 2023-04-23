import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import './dorm_carousel.css';
import {Dorm} from '../../molecules';

const Hotels_carousel = () =>  {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <div className="dorm-carousel-container">
            <p className="header3 title">Dorm</p>
            <p className="small subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className="dorm-item">
                        <Dorm/>
                        <Dorm/>
                        <Dorm/>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="dorm-item">
                        <Dorm/>
                        <Dorm/>
                        <Dorm/>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="dorm-item">
                        <Dorm/>
                        <Dorm/>
                        <Dorm/>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
  }



export default Hotels_carousel;