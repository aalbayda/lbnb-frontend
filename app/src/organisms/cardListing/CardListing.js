import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './cardListing.css';
import {Row, Col} from 'react-bootstrap';
import {Button} from '../../atoms'

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
    <Row className="card-listing">

        <div class="img-div">
          <img className="accommodation-img" src={image} alt="accommodation-img"></img>
        </div>

        <Col>
          <div className="middle-section">
            <h1>{name}</h1>
            <p>{location}</p>
            <p className="accommodation-desc">{description}</p>
          </div>
        </Col>
        
        <Col>
          <h2>{price}</h2>
          <p>{stars} {reviews}</p>
          <Button />
        </Col>
    </Row>
  );
}

export default CardListing;