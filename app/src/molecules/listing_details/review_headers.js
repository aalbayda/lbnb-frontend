import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./review_headers.css";
import config from "../../config";
import { Container } from "react-bootstrap";
import { Rating } from "@mui/material";
const url = config.apiUrl;

const ReviewHeaders = () => {
  const header = "Ratings and Reviews";

  return (
    <Container className="review-container">
      <Container className="review-header-container">
        <h4 className="review-header">{header}</h4>
      </Container>

      <Container className="review-numstar-button">
        <button className="all s-add-style"> 
          <Rating
              className="rating-medium"
              defaultValue={5}
              readOnly={true}
              sx={{
                fontSize: "1rem",
                color: "var(--color-background)",
              }}
            />
          <p>All</p>
        </button>
        <button className="s1 s-add-style"> 
          <Rating
            className="rating-medium"
            defaultValue={5}
            readOnly={true}
            sx={{
              fontSize: "1rem",
              color: "var(--color-background)",
            }}
          />
          <p>5 Star</p>
        </button>
        <button className="s2 s-add-style"> 
          <Rating
            className="rating-medium"
            defaultValue={4}
            max={4}
            readOnly={true}
            sx={{
              fontSize: "1rem",
              color: "var(--color-background)",
            }}
          />  
          <p>4 Star</p>
        </button>
        <button className="s3 s-add-style"> 
          <Rating
            className="rating-medium"
            defaultValue={3}
            max={3}
            readOnly={true}
            sx={{
              fontSize: "1rem",
              color: "var(--color-background)",
            }}
          />    
          <p>3 Star</p>
        </button>
        <button className="s4 s-add-style"> 
          <Rating
            className="rating-medium"
            defaultValue={2}
            max={2}
            readOnly={true}
            sx={{
              fontSize: "1rem",
              color: "var(--color-background)",
            }}
          />  
          <p>2 Star</p>
        </button>
        <button className="s5 s-add-style">
          <Rating
            className="rating-medium"
            defaultValue={1}
            max={1}
            readOnly={true}
            sx={{
              fontSize: "1rem",
              color: "var(--color-background)",
            }}
          />  
          <p>1 Star</p>
        </button>
      </Container>
    </Container>
  );
};

export default ReviewHeaders;
