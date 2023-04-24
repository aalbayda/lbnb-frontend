import React from "react";
import "./details.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "../../organisms";
import {
  ListingDetails,
  ReviewHeaders,
  ReviewCommentCard,
  CommentButton,
} from "../../organisms";
import { Container } from "react-bootstrap";

const Details = () => {
  return (
    <div class="detials-page-main-div">
      <NavBar />
      <div className="details-content">
        <ListingDetails />

        <Container className="review-section-div">
          <ReviewHeaders />
          <div className="rev-comm-card-div">
            <ReviewCommentCard />
            <ReviewCommentCard />
            <ReviewCommentCard />
          </div>
          <CommentButton />
        </Container>
      </div>
    </div>
  );
};

export default Details;
