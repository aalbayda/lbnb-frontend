import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./review_comment_card.css";
import config from "../../config";
import { Row, Col, Container } from "react-bootstrap";
const url = config.apiUrl;

const ReviewCommentCard = (review) => {
  const user_img =
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const comment = review.REVIEW_COMMENT;
  const user_name = "user01";
  const stars = "★★★★☆";
  return (
    <Container className="review-comment-card">
      <Row>
        <div className="user-img-div">
          <img className="user-img" src={user_img} alt="user-img"></img>
        </div>

        <Col>
          <div className="name-rating-div">
            <h6 className="name-rating-text">{user_name}</h6>
            <h6 className="name-rating-text">{stars}</h6>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="comment-div">
          <p> {comment}</p>
        </div>
      </Row>
    </Container>
  );
};

export default ReviewCommentCard;
