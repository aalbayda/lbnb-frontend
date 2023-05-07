import React from "react";
import "./rating_review_section.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { ReviewHeaders, 
  ReviewCommentCard
} from "../../molecules";


const RatingReviewSection =()=>{
    return(
        <Container className="review-section-div">
          <ReviewHeaders />
          <div className="rev-comm-card-div">
            <ReviewCommentCard />
            <ReviewCommentCard />
            <ReviewCommentCard />
          </div>
        </Container>
    )
}

export default RatingReviewSection;