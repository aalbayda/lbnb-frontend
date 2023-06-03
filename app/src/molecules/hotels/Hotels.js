import React, {useState, useEffect} from "react";
import "./hotels.css";
import Button from "react-bootstrap/Button";
import { banner1 } from "../../assets/images";
import { useNavigate } from 'react-router-dom';
// import { StarRating } from "../../atoms";
import { Rating } from "@mui/material";
import axios from "axios";
// const url = "https://mockup-backend-128.herokuapp.com";
// import images from '../../assets/images/hotels/images';
const url = "https://elbnb-server.herokuapp.com";

const Hotels = ({topHotels}) => {
  let navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  // useEffect(() => {
  //   const filteredImageKey = Object.keys(images).find(key => key === topHotels.ACCOMMODATION_NAME);
  //   const filteredImage = filteredImageKey ? images[filteredImageKey] : banner1;
  //   setPhoto(filteredImage);
  // }, [topHotels.ACCOMMODATION_NAME]);

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
        // setPhoto(banner1);
        console.error(error);
        return banner1;
      }
    };

    Promise.all([
      fetchData(topHotels.ACCOMMODATION_NAME),
    ]).then(([hotel]) => {
      setPhoto(hotel);

    });
  }, []);

  return (
    <div className="hotels-carousel-container">
      <div className=" hotels-carousel">
        <div className="hotels-carousel-left">
          <img className="shine-div d-block w-100 photo" src={photo} alt="First slide" loading="lazy"/>
        </div>
        <div className="hotels-carousel-right">
          <p className="large-bold">{topHotels.ACCOMMODATION_NAME}</p>
          <Rating
              name="read-only"
              readOnly
              value={topHotels.AVERAGE_RATING}
            />
          <p className="small">
            {topHotels.ACCOMMODATION_DESCRIPTION}
          </p>
          <Button
            className="small-bold carousel-btn"
            onClick={()=>{navigate('/details',
            {state:{props:topHotels}}
            )}}
          >
            {" "}
            View More{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
