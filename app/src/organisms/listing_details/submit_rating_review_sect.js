import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './submit_rating_review_sect.css';
import {InputGroup, Form, Container} from "react-bootstrap";
import {MUIStarRating} from '../../atoms'

const SubmitRatingReviewSect = () => {
    return(
        <Container className="comment-star-container">
            <InputGroup className="comment-button">
                <div className="star-div">
                    <MUIStarRating/>
                </div>
                <Form.Control
                    placeholder="Write Comment"
                    aria-label="Write Comment"
                />
                <button className="submit-button">
                Submit
                </button>
            </InputGroup>
        </Container>
    )
}

export default SubmitRatingReviewSect;