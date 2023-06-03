import React, {useEffect, useState} from "react";
import "./dorm.css";
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { banner1 } from "../../assets/images";
// import { StarRating } from "../../atoms";
// import images from '../../assets/images/dorms/images';
import { Rating } from "@mui/material";
import axios from "axios";
// const url = "https://mockup-backend-128.herokuapp.com";
const url = "https://elbnb-server.herokuapp.com";

const Dorm = ({topDorms}) => {
  let navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  // useEffect(() => {
  //   const filteredImageKey = Object.keys(images).find(key => key === topDorms.ACCOMMODATION_NAME);
  //   const filteredImage = filteredImageKey ? images[filteredImageKey] : banner1;
  //   setPhoto(filteredImage);
  // }, [topDorms.ACCOMMODATION_NAME]);

    
  useEffect(() => {
    const fetchData = async (name) => {
      try {
        const response = await axios.post(
          url + "/accommodation/get-accommodation-pic",
          { name }
        );
        console.log(`-${name}-`);
        console.log(response.data);
        if (response.data.success === false){
          return banner1
        }

        return response.data.accommodation;
      } catch (error) {
        console.error(error);
        return [];
      }
    };

    Promise.all([
      fetchData(topDorms.ACCOMMODATION_NAME),
    ]).then(([dorm]) => {
      setPhoto(dorm);

    });
  }, []);

  return (
    <div className="dorm-carousel-container">
      <div className="shine-div zoom-in-effect dorm-carousel-card">
        <div className="dorm-carousel-card-upper">
          <img className="d-block w-100" src={photo} alt="First slide" loading="lazy"/>
        </div>
        <div className="dorm-carousel-card-lower">
          <p className="large-bold">{topDorms.ACCOMMODATION_NAME}</p>
          <Rating
              name="read-only"
              value={topDorms.AVERAGE_RATING}
              readOnly
            />
          <p className="small dorm-description">
            {topDorms.ACCOMMODATION_DESCRIPTION}
          </p>
                  {/* <div className="dorm-carousel-card-lowest"> */}
        <Button
            className="small-bold carousel-btn dorm-btn"
            onClick={()=>{navigate('/details',
            {state:{props:topDorms}}
            )}}
          >
            View More
          </Button>
        {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dorm;
