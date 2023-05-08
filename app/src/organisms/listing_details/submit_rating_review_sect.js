import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './submit_rating_review_sect.css';
import {Row, Container} from "react-bootstrap";
import {MUIStarRating, CommentTextField, SubmitButton} from '../../atoms'

const SubmitRatingReviewSect = () => {
    return(
        <Container className="comment-star-container">
            <Row>
                <div className="star-div">
                    <MUIStarRating/>
                    <CommentTextField/>
                    <SubmitButton/>
                </div>  
            </Row>
          
        </Container>
    )
}

export default SubmitRatingReviewSect;