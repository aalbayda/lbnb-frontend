import React from "react";
import "./rating_review_section.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { ReviewHeaders, 
  ReviewCommentCard
} from "../../molecules";
import axios from "axios";
const url = "https://mockup-backend-128.herokuapp.com";


const RatingReviewSection =(props)=>{
  const num__of_reviews=5;
  const accommName= props.accommName;

  //to fetch review from the backend
  // const[reviews, setReviews]=React.useState();
  // axios.post(url+"/accommodation/get-reviews", {
  //   accommodationName:accommName
  // })
  // .then(function (response) {
  //   setReviews(response.data.result)
  //   console.log(response)
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

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