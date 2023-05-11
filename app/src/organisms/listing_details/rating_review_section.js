import React from "react";
import "./rating_review_section.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { ReviewHeaders, 
  ReviewCommentCard
} from "../../molecules";


const RatingReviewSection =()=>{
  const num__of_reviews=5;
    return(
        <Container className="review-section-div">
          <ReviewHeaders />
          <div className="rev-comm-card-div">
            {ReviewCommentCardLoop(num__of_reviews)}
          </div>
        </Container>
    )
}

const ReviewCommentCardLoop = (num) => {
  const array = []

  for(var i = 1; i <= num; i++){
    array.push(<ReviewCommentCard key={i}/>)
  }

  return array
}

export default RatingReviewSection;