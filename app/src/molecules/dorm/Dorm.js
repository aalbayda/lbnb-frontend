import React from "react";
import './dorm.css';
import Button from 'react-bootstrap/Button';
import {banner1} from "../../assets/images";
import {StarRating} from "../../atoms";

const Dorm = () => {
    return (
        <div className="dorm-carousel-container">
            <div className="dorm-carousel-card">
                <div className="dorm-carousel-card-upper">
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                        />
                </div>
                <div className="dorm-carousel-card-lower">
                    <p className="large-bold">Dorm</p>
                    <StarRating/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                    </p>
                    <Button className="small-bold carousel-btn">View More</Button>
                </div>
            </div>
        </div>
    );
}

export default Dorm;