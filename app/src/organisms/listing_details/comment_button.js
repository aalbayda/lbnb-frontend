import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './comment_button.css';
import {InputGroup, Form} from "react-bootstrap";

const CommentButton = () => {
    return(
        <InputGroup className="comment-button">
            <Form.Control
            placeholder="Add Review"
            aria-label="Add Review"
            />
            <button className="submit-button">
            Submit Review
            </button>
        </InputGroup>
    )
}

export default CommentButton;