import { React, useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './review_comment_card.css';
import {Row, Col, Container} from "react-bootstrap";
import { Rating } from "@mui/material";
const url = "https://mockup-backend-128.herokuapp.com";

//TODO: fetch user image, implement toggle of stars

const ReviewCommentCard = (props) => {
    const comment = props.comment ? props.comment : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tempor mauris. In hac habitasse platea dictumst. Phasellus consectetur posuere mattis. Nullam.";
    const user_name= props.userName? props.userName : "student2";
    const rating = props.rating ? props.rating : 3;

    const [user_img, setImg] = useState("https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    useEffect(() => {
      axios
        .post(url + "/user/get-user-pic", {
          userName: user_name,
        })
        .then(function (response) {
          if (response.data.success) {
            setImg(response.data.imageUrl);
          }
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);
    return (
        <Container className="review-comment-card">
            <Row>
                <div className="user-img-div">
                    <img className="user-img" src={user_img} alt="user-img"></img> 
                </div>

                <Col>
                    <div className="name-rating-div">
                        <h6 className="name-rating-text">{user_name}</h6>
                        <h6 className="name-rating-text">
                        <Rating
                            className="rating-medium"
                            defaultValue={rating}
                            precision={0.5}
                            readOnly= {true}
                            sx={{
                                fontSize: "1rem",
                                color: "#1C3103", 
                                mr: 1,
                            }}/>
                        </h6>
                    </div>
                </Col>
            </Row>
            <Row>
                <div className="comment-div">
                    <p> {comment}</p>
                </div>
            </Row>
        </Container>
    )
}

export default ReviewCommentCard;