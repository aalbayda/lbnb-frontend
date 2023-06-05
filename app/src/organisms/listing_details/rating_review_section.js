import { React, useEffect, useState } from "react";
import axios from "axios";
import "./rating_review_section.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { ReviewHeaders, ReviewCommentCard } from "../../molecules";
import config from "../../config";
const url = config.apiUrl;

const RatingReviewSection = (props) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .post(url + "/acommodation/get-reviews", {
        accommodationName: props.props.ACCOMMODATION_NAME,
      })
      .then((response) => {
        setReviews(response.data.reviews);
      })
      .catch((err) => console.error(err));
  }, [props.props.ACCOMMODATION_NAME]);
  return (
    <Container className="review-section-div">
      <ReviewHeaders />
      <div className="rev-comm-card-div">
        {reviews.map((review) => (
          <ReviewCommentCard review={review} />
        ))}
      </div>
    </Container>
  );
};

export default RatingReviewSection;
