import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './submit_rating_review_sect.css';
import {Row, Container} from "react-bootstrap";
// import {MUIStarRating, CommentTextField, SubmitButton} from '../../atoms'
import { Rating, TextField } from "@mui/material";

const SubmitRatingReviewSect = () => {
    const [tfValue, setTFValue] = React.useState("");
    const [rateVal, setRateVal] = React.useState(0);
    
    return(
        <Container className="comment-star-container">
            <Row>
                <div className="star-div">
                <Rating
                    className="rating-medium"
                    // defaultValue={3.5}
                    precision={0.5}
                    sx={{
                    fontSize: "2rem",
                    color: "#1C3103", 
                    mr: 1,
                    }}
                    onChange={(newValue) => setRateVal(newValue.target.value)}
                    value={rateVal}
                />
                <TextField
                    sx={{
                        width: 950,
                    }}
                    id="fullWidth"
                    label="Multiline"
                    multiline
                    maxRows={4}
                    onChange={(newValue) => setTFValue(newValue.target.value)}
                    value={tfValue}
                />
                <button className="submit-button" onClick={()=>{
                    setTFValue(""); 
                    setRateVal(0);
                    console.log(tfValue);
                    console.log(rateVal);
                    }}> Submit </button>
                </div>  
            </Row>
          
        </Container>
    )
}

export default SubmitRatingReviewSect;