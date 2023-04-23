import React from "react";
import './hotels.css';
import Button from 'react-bootstrap/Button';
import {banner1} from "../../assets/images";
import {StarRating} from "../../atoms";

const Apartment = () => {
    return (
        <div className="hotels-carousel-container">
            <div className="hotels-carousel">
                <div className="hotels-carousel-left">
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    />
                </div>
                <div className="hotels-carousel-right">
                    <p className="large-bold">TITLE</p>
                    <StarRating/>
                    <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    <Button className="small-bold carousel-btn"> View More </Button>
                </div>
            </div>
        </div>
    );
}

export default Apartment;