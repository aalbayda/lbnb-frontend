import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './review_headers.css';
import { Container } from "react-bootstrap";


const ReviewHeaders = () => {
    const header="Ratings and Reviews";

    return(
        <Container className="review-container">
            <h4 className="review-header">{header}</h4>
            <Container className="review-numstar-button">
                <button className="all s-add-style"> All </button>
                <button className="s1 s-add-style" > 5 Star</button>
                <button className="s2 s-add-style" > 4 Star</button>
                <button className="s3 s-add-style" > 3 Star</button>
                <button className="s4 s-add-style" > 2 Star</button>
                <button className="s5 s-add-style" > 1 Star</button>
            </Container>
        </Container>
    )
}

export default ReviewHeaders;