import React from "react";
import { useEffect } from 'react';
import "./rating_review_section.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { ReviewHeaders, 
  ReviewCommentCard
} from "../../molecules";
import axios from "axios";
const url = "https://mockup-backend-128.herokuapp.com";


const RatingReviewSection =(props)=>{
  const accommName= props.accommName;
  const userName= props.userName;

  const review_dummy= [
      {
          "REVIEW_ID": 84,
          "REVIEW_RATING": 3.5,
          "REVIEW_COMMENT": "Decent place to stay.",
          "REVIEW_DATE": "2023-05-11T18:08:48.000Z",
          "USER_ID": 84,
          "ACCOMMODATION_ID": 94
      }
  ]

  //to fetch review from the backend
  const[reviews, setReviews]=React.useState(review_dummy);
  useEffect(()=>{
    axios.post(url+"/accommodation/get-reviews", {
      accommodationName:accommName
    })
    .then(function (response) {
      if(response.data.success){
        setReviews(response.data.reviews)
      }
      console.log(response)
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [])

  const reviewItems= reviews.map(
    (review) => {
        return(
          <ReviewCommentCard 
            key={review.REVIEW_ID}
            rating={review.REVIEW_RATING}
            comment={review.REVIEW_COMMENT}
            date={review.REVIEW_DATE}
            user_id= {review.USER_ID}
            accom_id={review.ACCOMMODATION_ID}
            userName={userName}
          />
        )
    }
  )

    return(
        <Container className="review-section-div">
          <ReviewHeaders />
          <div className="rev-comm-card-div">
            {reviewItems}
          </div>
        </Container>
    )
}



export default RatingReviewSection;