import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './submit_rating_review_sect.css';
import {Row, Container} from "react-bootstrap";
// import {MUIStarRating, CommentTextField, SubmitButton} from '../../atoms'
import { Rating, TextField } from "@mui/material";
import axios from "axios";
const url = "https://mockup-backend-128.herokuapp.com";

const SubmitRatingReviewSect = (props) => {
    const [comment, setComment] = React.useState("");
    const [rateVal, setRateVal] = React.useState(0);
    const timestamp= new Date();
    const userName="userName";
    const accomName="accomName";

    const handleSubmit=()=>{
        if(rateVal != 0){
            axios.post(url+'/accommodation/add-review', {
                comment: comment,
                userName: userName,
                timestamp: timestamp,
                accommName: accomName,
                rating: rateVal
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log("Error")
                console.log(error);
            });
        }
        setComment(""); 
        setRateVal(0);
        console.log(comment);
        console.log(rateVal);
    }
    
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
                    onChange={(newValue) => setRateVal(parseFloat(newValue.target.value))}
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
                    onChange={(newValue) => setComment(newValue.target.value)}
                    value={comment}
                />
                <button className="submit-button" onClick={handleSubmit}> Submit </button>
                </div>  
            </Row>
          
        </Container>
    )
}

export default SubmitRatingReviewSect;