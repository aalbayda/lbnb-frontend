import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './cardListing.css';
import '../../index.css';
import {Col} from 'react-bootstrap';
import {ViewMoreButton} from '../../atoms'

const CardListing = () => {

  // change these values
  const image = "https://scontent.fmnl9-3.fna.fbcdn.net/v/t39.30808-6/286679630_111273458272558_8860484076880108331_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=6eLvJ7yTFJgAX-RX2nz&_nc_ht=scontent.fmnl9-3.fna&oh=00_AfAycEhnU-02Ya69t-Fe7638oN5KvCLuM0dsEbwHLESygQ&oe=6443C76C";
  const name = "Casa de Felicidad";
  const location = "Los Banos, Laguna";
  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tempor mauris. In hac habitasse platea dictumst. Phasellus consectetur posuere mattis. Nullam.";
  const price = "P8,000 - P16,000";
  const stars = "★★★★☆";
  const reviews = "(32 reviews)";


  return (
    <div className="card-listing">

        {/* fixed variable width column */}
        <Col md="auto">
          <div className="img-div">
            <img className="accommodation-img" src={image} alt="accommodation-img"></img>
          </div>
        </Col>

        <Col xs={6}>
          <div className="middle-section add-padding">
            <div className="name-loc-section">
              <h1 className="large-bold accom-name">{name}</h1>
              <p className="small">{location}</p>
            </div>
          <p className="small accom-desc">{description}</p>
          </div>
        </Col>
        
        <Col>
          <div className="right-section add-padding">
            <div className="price-section">
              <h2 className="large-bold price-range">{price}</h2>
              <div>
                <p className="small review-stars">{stars}</p>
                <p className="small review-num">{reviews}</p>
              </div>
            </div>
            <ViewMoreButton />
          </div>
        </Col>
    </div>
  );
}

export default CardListing;