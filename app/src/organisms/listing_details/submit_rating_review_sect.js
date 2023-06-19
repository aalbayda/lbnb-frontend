import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./submit_rating_review_sect.css";
import { Row, Container } from "react-bootstrap";
// import {MUIStarRating, CommentTextField, SubmitButton} from '../../atoms'
import { Rating, TextField } from "@mui/material";
import axios from "axios";
import {
  isLoggedIn,
  getAuthUsername,
  getAuthType,
  getAuthName,
  getAuthEmail,
} from "../../auth";
import config from "../../config";
import { AlertModals } from "../../molecules";
const url = config.apiUrl;

const SubmitRatingReviewSect = (props) => {
  const [comment, setComment] = useState("");
  const [rateVal, setRateVal] = useState(0);
  const [alert, setAlert] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const accommName = props.props.ACCOMMODATION_NAME;

  const handleSubmit = () => {
    console.log("entered");
    if (!isLoggedIn() || !(getAuthType() === "Student")) {
      setModalShow(true)
      setAlert("Log in as a registered tenant first!");
      return;
    }

    if (!rateVal) {
      setModalShow(true)
      setAlert("Add a rating first!");
      return;
    }

    const timestamp = new Date(
      new Date().toString().split("GMT")[0] + " UTC"
    ).toISOString();
    console.log(getAuthUsername(), timestamp, accommName, comment, rateVal);
    if (rateVal != 0) {
      axios
        .post(url + "/accommodation/add-review", {
          comment: comment,
          userName: getAuthUsername(),
          timestamp: timestamp,
          accommName: accommName,
          rating: rateVal,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log("Error");
          console.log(error);
        });
    }
    setComment("");
    setRateVal(0);
  };

  return (
    <Container className="comment-star-container">
      <Row>
        <div className="star-div">
          <Rating
            className="rating-medium"
            // defaultValue={3.5}
            precision={0.5}
            // disabled={isLoggedIn() && getAuthType === "Student" ? false : true}
            sx={{
              fontSize: "2rem",
              color: "#1C3103",
              mr: 1,
            }}
            onChange={(newValue) =>
              setRateVal(parseFloat(newValue.target.value))
            }
            value={rateVal}
          />
          <TextField
            sx={{
              width: 950,
            }}
            id="fullWidth"
            label="Write Comment"
            multiline
            // disabled={!(isLoggedIn() && getAuthType === "Student")}
            maxRows={4}
            onChange={(newValue) => setComment(newValue.target.value)}
            value={comment}
          />
          <button className="submit-button" onClick={handleSubmit}>
            {" "}
            Submit{" "}
          </button>
          <AlertModals
            alert = {"Log in as a registered tenant first!"}
            show={modalShow} 
            onHide={() => setModalShow(false)} 
          />
          {/* {isLoggedIn() && getAuthType() === "Student" ? (
          ) : (
            <button className="submit-button" disabled>
              {" "}
              Submit{" "}
            </button>
          )} */}
        </div>
      </Row>
    </Container>
  );
};

export default SubmitRatingReviewSect;
