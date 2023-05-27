import { React, useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./reportModal.css";
import Form from "react-bootstrap/Form";
const url = "https://mockup-backend-128.herokuapp.com";

function Login(props) {
  const [toggleState, setToggleState] = useState(1);
  const [missingLogin, setMissingLogin] = useState(false);
  const [wrongLogin, setWrongLogin] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  // const [isBusinessAccount, setIsBusinessAccount] = useState(false);
  // const [modalShow, setModalShow] = useState(false);
  // const [modalShow, setModalShow] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [invalidLogin, setInvalidLogin] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    toggleTab(1);
  }, []);

  // const handleSignUp = () => {
  //   if (email === "" || password === "" || fname === "" || lname === "") {
  //     setMissingLogin(true);
  //     return;
  //   }

  //   axios
  //     .post(url + "/signUp", {
  //       email: email,
  //       password: password,
  //       username: email,
  //       firstName: fname,
  //       lastName: lname,
  //       contactNum: 0,
  //       isBusinessAccount: isBusinessAccount,
  //       isPersonalAccount: !isBusinessAccount,
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //       window.location.reload();
  //     })
  //     .catch(function (error) {
  //       console.log("Error!!!");
  //       console.log(error);
  //     });
  // };

  // const handleLogin = () => {
  //   if (email === "" || password === "") {
  //     setMissingLogin(true);
  //     return;
  //   }

  //   axios
  //     .post(url + "/login", {
  //       email: email,
  //       password: password,
  //     })
  //     .then(function (response) {
  //       if (!response.data) {
  //         setMissingLogin(true);
  //       } else if (response.data.success) {
  //         // console.log(response.data);
  //         // console.log(response.data);
  //         let date = new Date();
  //         date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
  //         document.cookie = `authToken=${
  //           response.data.authToken
  //         }; path=/; expires=${date.toUTCString()}`;

  //         // set whether personal or business

  //         window.location.reload();
  //       } else if (!response.data.success) {
  //         console.log(response.data);
  //         setWrongLogin(true);
  //       } else {
  //         console.log(response.data);
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log("Error!!!");
  //       console.log(error);
  //     });
  // };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <p className="report large-bold">Report Accomodation</p>
      </Modal.Header>
      <Modal.Body>
        {/* Log-in */}
        <div className={toggleState === 1 ? "content" : "inactive-content"}>
          <div className="report-container">
            <p className="reason-text regular-bold">Reason</p>
            <p className="tiny">Your report is anonymous, so feel comfortable reporting to make LBNB safe for everyone.</p>
            <textarea
              className="report-textarea"
              placeholder="Help us understand the problem..."
            />
            <Button className="report-btn" 
            // onClick={handleLogin}
            onClick={() => toggleTab(2)}
            >
              Submit Report
            </Button>
            {missingLogin ? (
              <div
                className="tiny text-center"
                style={{ fontStyle: "italic", color: "red" }}
              >
                At least one field is missing or invalid!
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className={toggleState === 2 ? "content" : "inactive-content"}>
          <div className="report-container">
            <p className="reason-text-2 regular-bold">Thank you for Submitting</p>
            <p className="tiny center-text">We take reports seriously and after a thorough review. <br/>We will take action.</p>
            <Button className="report-btn-2" 
              // onClick=}
              onClick={() => window.location.reload()}
            >
              Close this window
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Login;
